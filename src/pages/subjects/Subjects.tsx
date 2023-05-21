import { useTranslation } from 'react-i18next';
import SubjectInfo from '../../shared/subjects/SubjectInfo';
import Card from '../../shared/card/Card';

import './Subjects.scss';
import { useGetSubjectsQuery } from '../../features/subject/api/subjectApi';
import { Subject } from '../../features/subject/model';

const Subjects = () => {
  const { t } = useTranslation('t', { keyPrefix: 'subjects' });
  const { data: subjects } = useGetSubjectsQuery();

  const renderSubject = () => {
    return subjects?.map((subject: Subject) => {
      return (
        <Card key={subject.subjectId}>
          <SubjectInfo
            subjectTitle={subject.subjectTitle}
            subjectDescription={subject.subjectDescription}
            numberHours={subject.numberHours}
          ></SubjectInfo>
        </Card>
      );
    });
  };

  return (
    <div className="subjects-page">
      <h2>{t('title')}</h2>
      <div className="subjects-page__list-subject">{renderSubject()}</div>
    </div>
  );
};

export default Subjects;
