import React from 'react';

import './Card.scss';

const Card: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
