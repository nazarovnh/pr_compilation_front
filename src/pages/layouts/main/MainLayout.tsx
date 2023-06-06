import { Outlet, useNavigate } from 'react-router-dom';
import './MainLayout.scss';
import { Icon, IconType } from '../../../shared/icon';
import { Container } from '@mui/material';

interface MainLayoutProps {
  hideHeaderBack?: boolean;
}
const MainLayout = ({ hideHeaderBack = true }: MainLayoutProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="main-layout">
      {hideHeaderBack ? null : (
        <Container onClick={() => navigate(-1)}>
          <Icon icon={IconType.Arrow}></Icon>
        </Container>
      )}
      <Outlet />
    </div>
  );
};

export default MainLayout;
