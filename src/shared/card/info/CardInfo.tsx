import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { Icon, IconType } from '../../icon';

import './CardInfo.scss';
import Dot from '../../dot/Dot';

interface CardInfoProps {
  className?: string;
  title: string;
  description: string;
  isShowArrow?: boolean;
  isShowHoveringText?: boolean;
  items: string;
  sx?: string;
  hints: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  className,
  title,
  description,
  isShowArrow = true,
  items,
  hints,
  isShowHoveringText = true,
  sx = 'block',
}) => {
  const { t } = useTranslation('t', { keyPrefix: 'subjects' });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Container
      className={`card-info ${className}`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      disableGutters={true}
      sx={{ display: sx }}
    >
      <div className="card-info_content">
        <h4 className="card-info__title">{title}</h4>
        <Typography className="card-info__description" variant="body1">
          {description}
        </Typography>
        <div className="card-info__items">
          <Typography variant="subtitle1">{items}</Typography>
          <Dot></Dot>
          <Typography className="card-info__hints" variant="subtitle1">
            {hints}
          </Typography>
        </div>
      </div>
      <div className="card-info__footer">
        <>
          {isShowHoveringText && isHovering ? (
            <p className="card-info__footer-title">{t('footer-title')}</p>
          ) : null}
          {isShowArrow ? <Icon icon={IconType.Vector}></Icon> : null}
        </>
      </div>
    </Container>
  );
};

export default CardInfo;
