import styles from './newsFeed.module.scss';

export const NewsFeed = () => {
  return (
    <div className={styles.newsFeed}>
      <div className={styles.news}>
        <span className={styles.title}>Tiele for news</span>
        <span className={styles.descriptions}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptatibus,
          perspiciatis voluptates totam hic quae, aperiam, nobis officiis itaque quis quaerat
          expedita quia aspernatur provident adipisci. Id soluta adipisci aliquam?
        </span>
      </div>
    </div>
  );
};
