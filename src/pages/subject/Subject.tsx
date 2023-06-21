import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/main/MainLayout';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useLazyGetSubjectQuery } from '../../features/subject/api/subjectApi';
import { Stack } from '@mui/material';

import './Subject.scss';
import Card from '../../shared/card/Card';
import CardInfo from '../../shared/card/info/CardInfo';
import { TopicSubjectGetResponse } from '../../features/subject/model';
import Dot from '../../shared/dot/Dot';

const Subject = () => {
  const { t } = useTranslation('t', { keyPrefix: 'subject' });
  const { subjectId } = useParams();
  const [getSubjects, subject] = useLazyGetSubjectQuery();

  const getThemeWord = (number: number | undefined, entity: string) => {
    if (!number) return '';
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return t(`${entity}.first_option`);
    } else if (lastDigit === 1) {
      return t(`${entity}.second_option`);
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return t(`${entity}.third_option`);
    } else {
      return t(`${entity}.first_option`);
    }
  };

  const getLanguage = () => {
    if (!subject.data?.languages) return t('language.any');
    return subject.data?.languages;
  };

  const renderTopicsCard = () => {
    return subject.data?.topics?.map((topic: TopicSubjectGetResponse) => {
      return (
        <Card
          className="topic-card"
          key={topic.topicId}
          // onClick={() => navigate(paths.subjectId(subject.subjectId))}
        >
          <CardInfo
            className="card-info__topic"
            title={topic.topicTitle}
            description={''}
            items={`${topic.numbersTasks} ${getThemeWord(topic.numbersTasks, 'tasks')}`}
            sx="flex"
            isShowHoveringText={false}
            hints={`${topic.completelyTasks} выполнено`}
          ></CardInfo>
        </Card>
      );
    });
  };

  useEffect(() => {
    if (subjectId) {
      getSubjects(subjectId);
    }
  }, [subjectId]);
  return (
    <MainLayout hideHeaderBack={false} title={subject.data?.subjectTitle}>
      <Stack className="subject-content">
        <p className="subject-content__description">{subject.data?.subjectDescription}</p>
        <Stack direction="row" className="subject-content__tasks-info">
          <h5 className="subject-content__number-tasks">
            {`${subject.data?.numberTasks} ${getThemeWord(subject.data?.numberTasks, 'topics')}`}
          </h5>
          <Dot></Dot>
          <h5>{getLanguage()}</h5>
        </Stack>
        {renderTopicsCard()}
      </Stack>
    </MainLayout>
  );
};

export default Subject;
