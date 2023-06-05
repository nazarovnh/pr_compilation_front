import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/hooks';

function PrivateLayout() {
  const isAuth = useAppSelector((state) => state.AUTH.isAuth);
  console.log(`isAuth ${document.referrer}`);
  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

export default PrivateLayout;
