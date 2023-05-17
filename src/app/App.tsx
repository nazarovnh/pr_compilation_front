import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { store } from '../features/store/store';
import routes from '../shared/routes';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={routes.root.index} element={<Home />} />
        <Route path={routes.wildcard} element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
