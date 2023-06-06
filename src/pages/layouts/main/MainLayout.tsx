import { Outlet, useNavigate } from 'react-router-dom';
import './MainLayout.scss';
import { Icon, IconType } from '../../../shared/icon';

interface MainLayoutProps {
  hideHeaderBack?: boolean;
}
const MainLayout = ({ hideHeaderBack = true }: MainLayoutProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="main-layout">
      {hideHeaderBack ? null : (
        <button className="main-layout__back" onClick={() => navigate(-1)}>
          <Icon icon={IconType.Arrow}></Icon>
        </button>
      )}
      <Outlet />
    </div>
  );
};

export default MainLayout;
