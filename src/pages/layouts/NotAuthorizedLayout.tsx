import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/hooks';

function NotAuthorizedLayout() {
  const isAuth = useAppSelector((state) => state.AUTH.isAuth);
  console.log(`isAuth ${isAuth}`);
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default NotAuthorizedLayout;
