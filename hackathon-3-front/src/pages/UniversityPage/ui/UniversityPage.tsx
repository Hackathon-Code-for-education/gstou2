import { ProjectInfoBlock } from '@/entities/ProjectInfoBlock';
import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { ImageUpload } from '@/shared/ui/ImageUpload/ImageUpload';
import { Flex, Title } from 'gentlemen-ui-kit';
import { Link, useParams } from 'react-router-dom';
import styles from './universityPage.module.scss';
import { ChatMessage } from '@/widgets/ChatMessage/ChatMessage';
import { NewsFeed } from '@/widgets/NewsFeed';
import { Header } from '@/widgets/Header/Header';

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useUniversityServiceGetUniversityById({ id: id as string });

  if (isLoading || isError || !data) {
    return <></>;
  }

  return (
    <div className={styles.universityPage}>
      <Header />
      <Flex vertical gap={12} className={styles.universityInfo}>
        <Flex gap={12}>
          <ImageUpload
            img={data.image ? `http://localhost:3010/${data.image[0]}` : ''}
            title="Изменить фото"
          />
          <ProjectInfoBlock data={data} title={data?.name || ''} />
        </Flex>
        <div style={{fontSize: 30, margin: '15px 0 10px 0'}}>Новости университета</div>
        <NewsFeed />
        <div style={{fontSize: 30, margin: '15px 0 10px 0'}}>Отзывы об университете</div>
        <ChatMessage universityId={id as string} />
      </Flex>
    </div>
  );
};
