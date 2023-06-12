import { useNavigate } from 'react-router-dom';
import { Icon, IconType } from '../icon';

import './Header.scss';
import { Button, Stack, Typography } from '@mui/material';
import ImageAvatar from '../avatar/ImageAvatar';
import { useWhoamiQuery } from '../../features/auth/api/authApi';

interface HeaderProps {
  hideHeaderBack?: boolean;
  title: string | null;
}

const Header = ({ hideHeaderBack = true, title }: HeaderProps) => {
  const navigate = useNavigate();
  const { data: whoami } = useWhoamiQuery();
  return (
    <header className="header">
      <div className="header__nav">
        {hideHeaderBack ? null : (
          <Button
            style={{ backgroundColor: 'transparent' }}
            className="header__button-back"
            onClick={() => navigate(-1)}
          >
            <Icon icon={IconType.Arrow}></Icon>
          </Button>
        )}
        <Typography variant="h2" className="title">
          {title}
        </Typography>
      </div>
      <Stack direction={'row'} className="header__profile">
        <ImageAvatar className="header__avatar" email={whoami?.email} />
        <Typography variant="h5">{whoami?.email}</Typography>
      </Stack>
    </header>
  );
};

export default Header;
