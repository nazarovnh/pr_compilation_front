import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { serverAddress } from '../../../app/constants';
import { ExecuteRequest, ExecuteResponse } from '../model';

export const TASK_API = 'TASK_API';

const createFormData = (sourceCode: File) => {
  const formData = new FormData();
  formData.append('sourceCode', sourceCode);
  // formData.append('language', 'cpp');
  return formData;
};

const taskApi = createApi({
  reducerPath: TASK_API,
  baseQuery: retry(fetchBaseQuery({ baseUrl: serverAddress }), {
    maxRetries: 0,
  }),
  endpoints: (builder) => ({
    execute: builder.mutation<ExecuteResponse, ExecuteRequest>({
      query: (request) => ({
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          // 'Content-Type': `multipart/form-data`,
        },
        method: 'POST',
        body: createFormData(request.sourceCode),
        url: `compile/topic/${request.topicId}/task/${request.taskId}/execute/cpp`,
      }),
    }),
  }),
});

export const { useExecuteMutation } = taskApi;

export const taskApiMiddleware = taskApi.middleware;

export default taskApi.reducer;
