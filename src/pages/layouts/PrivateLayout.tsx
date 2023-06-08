import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/hooks';

function PrivateLayout() {
  const isAuth = useAppSelector((state) => state.AUTH.isAuth);
  const loadingValidate = useAppSelector((state) => state.AUTH.loadingValidate);
  if (!loadingValidate && !isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

export default PrivateLayout;
