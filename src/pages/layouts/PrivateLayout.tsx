import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/hook';

function PrivateLayout() {
  const isAuth = useAppSelector((state) => state.AUTH.isAuth);

  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

export default PrivateLayout;
