import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignUpRequest } from '../models';

export const AUTH = 'AUTH';

export interface AuthState {
  signInSuccess: boolean;
  signUpData: SignUpRequest | null;
}

const initialState: AuthState = {
  signInSuccess: false,
  signUpData: null,
};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    changeSignInSuccess: (state: AuthState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        signInSuccess: action.payload,
      };
    },
    changeSignUpData: (state: AuthState, action: PayloadAction<SignUpRequest | null>) => {
      return {
        ...state,
        signUpData: action.payload,
      };
    },
  },
});

export const { changeSignInSuccess, changeSignUpData } = authSlice.actions;

export default authSlice.reducer;
