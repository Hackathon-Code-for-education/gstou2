import { ProjectInfoBlock } from '@/entities/ProjectInfoBlock';
import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { ImageUpload } from '@/shared/ui/ImageUpload/ImageUpload';
import { Flex, Slider } from 'gentlemen-ui-kit';
import { useParams } from 'react-router-dom';
import styles from './universityPage.module.scss';

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useUniversityServiceGetUniversityById({ id: id as string });

  if (isLoading || isError || !data) {
    return <></>;
  }

  return (
    <div className={styles.universityPage}>
      <Flex vertical gap={12}>
        <ImageUpload img="" title="Изменить фото" />
        <ProjectInfoBlock data={data} title={data?.name} />
      </Flex>
    </div>
  );
};
