import { ProjectInfoBlock } from '@/entities/ProjectInfoBlock';
import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { ImageUpload } from '@/shared/ui/ImageUpload/ImageUpload';
import { Flex } from 'gentlemen-ui-kit';
import { useParams } from 'react-router-dom';
import styles from './universityPage.module.scss';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { useEffect } from 'react';
import { connect } from 'socket.io-client';
import { ChatMessage } from '@/widgets/ChatMessage/ChatMessage';

export const socket = connect('http://localhost:3001');

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useUniversityServiceGetUniversityById({ id: id as string });

  if (isLoading || isError || !data) {
    return <></>;
  }

  useEffect(() => {
    socket.emit('join_room', id);
  }, []);

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
        {/* <NewsFeed /> */}
        <ChatMessage universityId={id as string} />
      </Flex>
    </div>
  );
};
