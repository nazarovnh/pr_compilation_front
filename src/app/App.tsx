import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
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

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route element={<MainLayout />}>
            <Route path={routes.root.index} element={<Subjects />} />
            <Route path={routes.task.task} element={<Task />} />
          </Route>
        </Route>

        <Route element={<NotAuthorizedLayout />}>
          <Route path={routes.profile.signUp} element={<SignUp />} />
          <Route path={routes.profile.signIn} element={<SignIn />} />
        </Route>

        <Route path={routes.wildcard} element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
