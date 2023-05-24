import authApi, { AUTH_API } from '../auth/api/authApi';
import authSlice, { AUTH } from '../auth/slice/authSlice';
import subjectApi, { SUBJECT_API } from '../subject/api/subjectApi';
import taskApi, { TASK_API } from '../task/api/taskApi';

const rootReducer = {
  [AUTH]: authSlice,
  [AUTH_API]: authApi,
  [SUBJECT_API]: subjectApi,
  [TASK_API]: taskApi,
};

export default rootReducer;
