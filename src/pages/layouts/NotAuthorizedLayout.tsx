import { Navigate, Outlet } from 'react-router-dom';

function NotAuthorizedLayout() {
  //   const isAuth = useSelector((state) => state.auth.isAuth);
  const isAuth = false;
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default NotAuthorizedLayout;
