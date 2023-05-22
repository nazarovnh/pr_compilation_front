import authApi, { AUTH_API } from '../auth/api/authApi';
import authSlice, { AUTH } from '../auth/slice/authSlice';
import subjectApi, { SUBJECT_API } from '../subject/api/subjectApi';

const rootReducer = {
  [AUTH]: authSlice,
  [AUTH_API]: authApi,
  [SUBJECT_API]: subjectApi,
};

export default rootReducer;
