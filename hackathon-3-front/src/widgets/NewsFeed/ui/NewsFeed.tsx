import { FC } from 'react';
import styles from './newsFeed.module.scss';
import { useUniversityNewsServiceGetNews } from '@/shared/api/openApi/queries';
import icon from './icon/commentsIcon.png'

interface NewsFeedProps {}

export const NewsFeed: FC<NewsFeedProps> = (params) => {
  const { data, isLoading, isError } = useUniversityNewsServiceGetNews();

  if (isLoading || isError || !data) {
    return <></>;
  }
  return (
    <div className={styles.newsFeed}>
      {data?.map((news, index) => (
        <div className={styles.news} key={index}>
          <span className={styles.title}>{news.title}</span>
          <div className={styles.imgContainer}>
            <img
              src={news.image ? `http://localhost:3010/${news.image[0]}` : ''}
              className={styles.newsImg}
            />
          </div>
          {news.description.length > 300 ? (
            <div>
            <span className={styles.descriptions}>{news.description.slice(0, 300)}</span>
            <button>...</button>
            </div>
          ) : (
            <span className={styles.descriptions}>{news.description}</span>
          )}
          <div className={styles.comments}><img src={icon} className={styles.commentIcons}/>{news.reviews?.length}</div>
        </div>
      ))}
    </div>
  );
};
