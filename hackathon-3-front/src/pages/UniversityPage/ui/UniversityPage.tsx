import { ProjectInfoBlock } from '@/entities/ProjectInfoBlock';
import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { ImageUpload } from '@/shared/ui/ImageUpload/ImageUpload';
import { Flex, Text } from 'gentlemen-ui-kit';
import { useParams } from 'react-router-dom';
import styles from './universityPage.module.scss';
import { SideBar } from '@/widgets/SideBar';

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useUniversityServiceGetUniversityById({ id: id as string });

  if (isLoading || isError || !data) {
    return <></>;
  }

  return (
    <div className={styles.universityPage}>
      <Flex>
        <SideBar />
        <Flex vertical gap={12} className={styles.universityInfo}>
          <ImageUpload
            img={data.image ? `http://localhost:3010/${data.image[0]}` : ''}
            title="Изменить фото"
          />
          <ProjectInfoBlock data={data} title={data?.name} />
        </Flex>
        <Flex vertical>
          //Добавить переход по институту
          {data.institute?.map((item) => (
            <Text>{item.title}</Text>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
