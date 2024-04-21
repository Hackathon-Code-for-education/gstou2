import { FC } from 'react';
import styles from './newsFeed.module.scss';
import { useUniversityNewsServiceGetNews } from '@/shared/api/openApi/queries';
import icon from './icon/commentsIcon.png'
import { useNavigate } from 'react-router-dom';

interface NewsFeedProps {}

export const NewsFeed: FC<NewsFeedProps> = (params) => {
  const { data, isLoading, isError } = useUniversityNewsServiceGetNews();
  const navigate = useNavigate()

  const handleOnNewsPage = (id: undefined|string) => {
    
    navigate(`/newsPage/${id}`)
  }

  if (isLoading || isError || !data) {
    return <></>;
  }
  return (
    <div className={styles.newsFeed}>
      {data?.map((news, index) => (
        <div className={styles.news} key={index} onClick={() => handleOnNewsPage(news._id)}>
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
