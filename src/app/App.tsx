import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { store } from '../features/store/store';
import routes from '../shared/routes';
import SignIn from '../pages/profile/SignIn/SignIn';
import NotAuthorizedLayout from '../pages/layouts/NotAuthorizedLayout';
import PrivateLayout from '../pages/layouts/PrivateLayout';
import './translation/translation';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path={routes.root.index} element={<Home />} />
        </Route>

        <Route element={<NotAuthorizedLayout />}>
          <Route path={routes.profile.signIn} element={<SignIn />} />
        </Route>

        <Route path={routes.wildcard} element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
