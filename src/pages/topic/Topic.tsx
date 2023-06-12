import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/main/MainLayout';

const Topic = () => {
  const { t } = useTranslation('t', { keyPrefix: 'topic' });
  return (
    <MainLayout hideHeaderBack={false} title={t('title')}>
      <div>TOpic</div>
    </MainLayout>
  );
};

export default Topic;
