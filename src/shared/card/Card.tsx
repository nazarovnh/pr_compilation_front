import React, { MouseEventHandler } from 'react';

import './Card.scss';
import { Container } from '@mui/material';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: MouseEventHandler | undefined;
  onMouseLeave?: MouseEventHandler | undefined;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({
  className = '',
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <Container
      className={`card ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Card;
