import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Icon, IconType } from '../icon';

import './SubjectInfo.scss';

interface SubjectInfoProps {
  subjectTitle: string;
  subjectDescription: string;
  numberHours: number;
  language?: string;
}

const SubjectInfo: React.FC<SubjectInfoProps> = ({
  subjectTitle,
  subjectDescription,
  numberHours,
  language = undefined,
}) => {
  const { t } = useTranslation('t', { keyPrefix: 'subjects' });
  return (
    <div className="subject-info">
      <h4 className="subject-info__title">{subjectTitle}</h4>
      <Typography className="subject-info__description" variant="body1">
        {subjectDescription}
      </Typography>
      <div className="subject-info__tasks-info">
        <Typography variant="subtitle1">{numberHours}</Typography>
        <Typography ml={'5%'} className="subject-info__languages" variant="subtitle1">
          {language ?? t('defaultLanguage')}
        </Typography>
      </div>
      <div className="subject-info__footer">
        <Icon icon={IconType.Vector}></Icon>
      </div>
      <div className="subject-info__icon"></div>
    </div>
  );
};

export default SubjectInfo;
