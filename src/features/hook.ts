import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

// Use throughout in app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createHeaders = (): Headers => {
  const headers: Headers = new Headers();

  headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  headers.set('Content-Type', 'application/json');

  return headers;
};

// TODO(Nariman): Replace it when add cookies and think about another entrypoint for handle error
/**
 * Log a warning and show a toast!
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action) && action.payload.status === 401) {
    localStorage.removeItem('accessToken');
    window.location.reload();
  }

  return next(action);
};
