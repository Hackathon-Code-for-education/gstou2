import { FC } from 'react';
import styles from './newsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useUniversityNewsServiceGetNewsById } from '@/shared/api/openApi/queries';

interface NewsPageProps {}

export const NewsPage: FC<NewsPageProps> = (props) => {
  const { id } = useParams();

  const { data, isLoading, isError } = useUniversityNewsServiceGetNewsById({id: id as string})

  if (isLoading || isError || !data) {
    return <></>;
  }
  console.log(data.image?.length);
  

  return (
    <>
      <div className={styles.newsPage}>
        <div className={styles.title}>
          <span>{data?.title}</span>
        </div>
        <div className={styles.info}>
          <div className={styles.newsImg}>
            <img src={data.image ? `http://localhost:3010/${data.image[0]}` : ''} alt="" />
          </div>
          <div className={styles.descriptions}><span>{data?.description}</span></div>
        </div>

        <div className={styles.comments}></div>
      </div>
    </>
  );
};