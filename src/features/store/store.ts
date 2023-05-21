import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { authMiddleware } from '../auth/api/authApi';
import { subjectApiMiddleware } from '../subject/api/subjectApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authMiddleware, subjectApiMiddleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
