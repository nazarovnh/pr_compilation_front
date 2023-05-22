import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/hook';

function NotAuthorizedLayout() {
  const isAuth = useAppSelector((state) => state.AUTH.isAuth);

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default NotAuthorizedLayout;
