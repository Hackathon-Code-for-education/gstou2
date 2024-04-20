import { useUniversityServiceGetUniversityById } from '@/shared/api/openApi/queries';
import { Title, Text, Flex } from 'gentlemen-ui-kit';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const UniversityPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useUniversityServiceGetUniversityById({ id: id as string });

  if (isLoading) {
    return <></>;
  }

  return (
    <Flex vertical gap={8} style={{ width: '350px', borderRadius: '8px', }}>
      <Title level={2}>Информация об Университете</Title>
      <Title level={5}>{data?.name}</Title>
      <Text>{data?.email}</Text>
      <Text>{data?.siteUrl}</Text>
      <Text>{data?.institute}</Text>
    </Flex>
  );
};
