import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { serverAddress } from '../../../app/constants';
import { createHeaders } from '../../hooks';
import { Subject } from '../model';

export const SUBJECT_API = 'SUBJECT_API';

const subjectApi = createApi({
  reducerPath: SUBJECT_API,
  baseQuery: retry(fetchBaseQuery({ baseUrl: serverAddress }), {
    maxRetries: 0,
  }),
  endpoints: (builder) => ({
    getSubjects: builder.query<Subject[], void>({
      query: () => ({
        headers: createHeaders(),
        method: 'GET',
        url: 'subjects/',
      }),
    }),
  }),
});

export const { useGetSubjectsQuery } = subjectApi;

export const subjectApiMiddleware = subjectApi.middleware;

export default subjectApi.reducer;
