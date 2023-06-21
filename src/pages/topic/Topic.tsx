import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/main/MainLayout';
// import { useParams } from 'react-router-dom';

const Topic = () => {
  const { t } = useTranslation('t', { keyPrefix: 'topic' });
  // const { topicId } = useParams();
  function getThemeWord(number: number) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'заданий';
    } else if (lastDigit === 1) {
      return 'задание';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'задания';
    } else {
      return 'заданий';
    }
  }

  return (
    <MainLayout hideHeaderBack={false} title={t('title')}>
      <div>{getThemeWord(2)}</div>
    </MainLayout>
  );
};

export default Topic;
