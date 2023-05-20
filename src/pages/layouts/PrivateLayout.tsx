import { Navigate, Outlet } from 'react-router-dom';

function PrivateLayout() {
  //  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAuth = true;
  if (isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

export default PrivateLayout;
