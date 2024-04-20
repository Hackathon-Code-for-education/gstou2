import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { Title } from 'gentlemen-ui-kit';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useUniversityServiceGetUniversityById({ id: id as string });

  if (isLoading) {
    return <></>;
  }

  console.log(data);

  return (
    <div>
      <Title level={5}>{data?.name}</Title>
    </div>
  );
};
