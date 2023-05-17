import authApi, { AUTH_API } from '../auth/api/authApi';
import authSlice, { AUTH } from '../auth/slice/authSlice';

const rootReducer = {
  [AUTH]: authSlice,
  [AUTH_API]: authApi,
};

export default rootReducer;
