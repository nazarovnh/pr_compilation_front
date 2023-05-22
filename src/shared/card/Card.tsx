import React, { MouseEventHandler } from 'react';

import './Card.scss';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: MouseEventHandler | undefined;
  onMouseLeave?: MouseEventHandler | undefined;
}
const Card: React.FC<CardProps> = ({ className = '', children, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`card ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Card;
