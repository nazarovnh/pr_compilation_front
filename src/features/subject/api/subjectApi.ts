import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { serverAddress } from '../../../app/constants';
import { GetSubjectRequest, Subject } from '../model';

export const SUBJECT_API = 'SUBJECT_API';

const subjectApi = createApi({
  reducerPath: SUBJECT_API,
  baseQuery: retry(fetchBaseQuery({ baseUrl: serverAddress }), {
    maxRetries: 0,
  }),
  endpoints: (builder) => ({
    getSubjects: builder.query<Subject[], void>({
      query: () => ({
        method: 'GET',
        url: 'subjects/',
      }),
    }),
    getSubject: builder.query<GetSubjectRequest, string>({
      query: (subjectId) => ({
        method: 'GET',
        url: `subjects/${subjectId}/topics`,
      }),
    }),
  }),
});

export const { useGetSubjectsQuery, useLazyGetSubjectQuery } = subjectApi;

export const subjectApiMiddleware = subjectApi.middleware;

export default subjectApi.reducer;
