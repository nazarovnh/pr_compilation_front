import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const AUTH = 'AUTH';

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: !!localStorage.getItem('accessToken'),
};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    changeIsAuth: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { changeIsAuth } = authSlice.actions;

export default authSlice.reducer;
