import React from 'react';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

interface ImageAvatarProps {
  className?: string;
  email?: string;
}

const ImageAvatar: React.FC<ImageAvatarProps> = ({ className, email = ' ' }) => {
  return (
    <Avatar
      className={`image-avatar ${className}`}
      sx={{ bgcolor: deepOrange[500], height: '72px', width: '72px' }}
      alt={email}
    ></Avatar>
  );
};

export default ImageAvatar;
