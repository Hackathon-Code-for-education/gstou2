import { useUniversityServiceGetUniversity } from '@/shared/api/openApi/queries';
import { UniversityCardMainPage } from '@/shared/ui/UniversityCardMainPage/UniversityCardMainPage';
import { Flex } from 'antd';
import { useEffect } from 'react';

export const UniversityCards = () => {
  const { data, isLoading, isError, refetch } = useUniversityServiceGetUniversity();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <Flex align="center" wrap="wrap" gap={8}>
      {data?.map((item) => (
        <UniversityCardMainPage
          universityName={item.name}
          location={item.email}
          backgroundImage={item.image && `http://localhost:3010/${item.image[0]}`}
        />
      ))}
    </Flex>
  );
};
