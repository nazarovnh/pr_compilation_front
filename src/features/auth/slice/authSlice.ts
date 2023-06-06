import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const AUTH = 'AUTH';

export interface AuthState {
  isAuth: boolean;
  loadingValidate: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  loadingValidate: true,
};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    changeIsAuth: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    changeLoadingValidate: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loadingValidate = action.payload;
    },
  },
});

export const { changeIsAuth, changeLoadingValidate } = authSlice.actions;

export default authSlice.reducer;
