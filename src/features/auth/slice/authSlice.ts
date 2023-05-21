import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const AUTH = 'AUTH';

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    changeIsAuth: (state: AuthState, action: PayloadAction<boolean>) => {
      console.log(`action ${action.payload}`);
      state.isAuth = action.payload;
    },
  },
});

export const { changeIsAuth } = authSlice.actions;

export default authSlice.reducer;
