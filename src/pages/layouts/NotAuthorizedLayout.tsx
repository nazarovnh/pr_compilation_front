import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/hooks';

function NotAuthorizedLayout() {
  const isAuth = useAppSelector((state) => state.AUTH.isAuth);
  const loadingValidate = useAppSelector((state) => state.AUTH.loadingValidate);
  if (!loadingValidate && isAuth) {
    console.log(window.location.href);
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default NotAuthorizedLayout;
