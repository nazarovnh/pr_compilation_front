import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { SignInResponse, SignInRequest, SignUpRequest, WhoIamResponse } from '../models';
import { serverAddress } from '../../../app/constants';

export const AUTH_API = 'AUTH_API';

const authApi = createApi({
  reducerPath: AUTH_API,
  baseQuery: retry(fetchBaseQuery({ baseUrl: serverAddress }), {
    maxRetries: 0,
  }),
  endpoints: (builder) => ({
    signIn: builder.query<SignInResponse, SignInRequest>({
      query: (request) => ({
        method: 'POST',
        url: '/signin',
        body: {
          ...request,
        },
      }),
    }),
    signUp: builder.query<void, SignUpRequest>({
      query: (request) => ({
        method: 'POST',
        url: '/signup',
        body: {
          ...request,
        },
      }),
    }),
    whoami: builder.query<WhoIamResponse, void>({
      query: () => ({
        method: 'GET',
        url: '/whoiam',
      }),
    }),
  }),
});

export const { useWhoamiQuery, useLazySignInQuery, useLazySignUpQuery } = authApi;

export const authMiddleware = authApi.middleware;

export default authApi.reducer;
