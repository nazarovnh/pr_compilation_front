import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import NotFound from '../pages/NotFound';
import { store } from '../features/store/store';
import routes from '../shared/routes';
import SignIn from '../pages/profile/SignIn/SignIn';
import NotAuthorizedLayout from '../pages/layouts/NotAuthorizedLayout';
import SignUp from '../pages/profile/SignUp/SignUp';
import PrivateLayout from '../pages/layouts/PrivateLayout';
import './translation/translation';
import Subjects from '../pages/subjects/Subjects';
import Task from '../pages/task/Task';
import MainLayout from '../pages/layouts/main/MainLayout';
import { useCheckAuth } from '../features/hooks';
import { useEffect } from 'react';
import Spinner from '../shared/spinner/Spinner';
import { changeIsAuth, changeLoadingValidate } from '../features/auth/slice/authSlice';
import Topic from '../pages/topic/Topic';

const AppRouter = (): JSX.Element => {
  const [loading, isAuth] = useCheckAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading && isAuth !== null) {
      dispatch(changeIsAuth(!!isAuth));
      dispatch(changeLoadingValidate(false));
    }
  }, [loading, isAuth]);

  const loader = (
    <div className="app-router__loader">
      <Spinner></Spinner>
    </div>
  );
  const router = (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path={routes.root.index} element={<MainLayout />}>
            <Route path={routes.root.index} element={<Subjects />} />
          </Route>
          <Route path={routes.root.index} element={<MainLayout hideHeaderBack={false} />}>
            <Route path={`${routes.root.subject}/${routes.subjectId}`} element={<Topic />} />
            <Route
              path={`${routes.root.topic}/${routes.topicId}/${routes.root.task}/${routes.taskId}`}
              element={<Task />}
            />
          </Route>
        </Route>

        <Route element={<NotAuthorizedLayout />}>
          <Route path={routes.profile.signUp} element={<SignUp />} />
          <Route path={routes.profile.signIn} element={<SignIn />} />
        </Route>

        <Route path={routes.wildcard} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  return loading || isAuth === null ? loader : router;
};

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
