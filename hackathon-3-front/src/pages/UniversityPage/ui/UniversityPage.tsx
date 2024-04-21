import { ProjectInfoBlock } from '@/entities/ProjectInfoBlock';
import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { ImageUpload } from '@/shared/ui/ImageUpload/ImageUpload';
import { Flex } from 'gentlemen-ui-kit';
import { Link, useParams } from 'react-router-dom';
import styles from './universityPage.module.scss';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { ChatMessage } from '@/widgets/ChatMessage/ChatMessage';
import { NewsFeed } from '@/widgets/NewsFeed';

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useUniversityServiceGetUniversityById({ id: id as string });
console.log(data);

  if (isLoading || isError || !data) {
    return <></>;
  }

  return (
    <div className={styles.universityPage}>
      <HeaderMainPage />
      <Flex vertical gap={12} className={styles.universityInfo}>
        <Flex gap={12}>
          <ImageUpload
            img={data.image ? `http://localhost:3010/${data.image[0]}` : ''}
            title="Изменить фото"
          />
          <ProjectInfoBlock data={data} title={data?.name || ''} />
        </Flex>

        <Link to={`/dormitore/${data?.dormitory?._id}`}>Перейти к общежитию</Link>
        {/* <NewsFeed /> */}
        {/* <ChatMessage universityId={id as string} /> */}

        <ChatMessage universityId={id as string} />
        <NewsFeed />

      </Flex>
    </div>
  );
};
