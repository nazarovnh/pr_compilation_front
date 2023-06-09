import { useTranslation } from 'react-i18next';
import SubjectInfo from '../../shared/subjects/SubjectInfo';
import Card from '../../shared/card/Card';

import './Subjects.scss';
import { useGetSubjectsQuery } from '../../features/subject/api/subjectApi';
import { Subject } from '../../features/subject/model';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../shared/routes';

const Subjects = () => {
  const { t } = useTranslation('t', { keyPrefix: 'subjects' });
  const navigate = useNavigate();
  const { data: subjects } = useGetSubjectsQuery();
  const renderSubject = () => {
    return subjects?.map((subject: Subject) => {
      return (
        <Card
          className="subject-card"
          key={subject.subjectId}
          onClick={() => navigate(paths.subjectId(subject.subjectId))}
        >
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
      <h2 className="subjects-page__title">{t('title')}</h2>
      <div className="subjects-page__list-subject">{renderSubject()}</div>
    </div>
  );
};

export default Subjects;
