// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './MainLayout.scss';
// import { Icon, IconType } from '../../../shared/icon';
// import { GlobalContext } from '../../../features/context/GlobalContext';
// import { useContext, useState } from 'react';
import Header from '../../../shared/header/Header';

// title={t('subjects.title')}
// title={t('topic.title')}
// const routeTitles = {
//   '/': 'Home',
//   '/about': 'About',
//   '/products': 'Products',
//   '/contact': 'Contact',
// };
interface MainLayoutProps {
  hideHeaderBack?: boolean;
  title?: string | null;
  children: React.ReactNode;
}

const MainLayout = ({
  hideHeaderBack = true,
  title = '',
  children,
}: MainLayoutProps): JSX.Element => {
  return (
    <div className="main-layout">
      <Header hideHeaderBack={hideHeaderBack} title={title} />
      <article className="main-layout__content">{children}</article>
    </div>
  );
};

export default MainLayout;
