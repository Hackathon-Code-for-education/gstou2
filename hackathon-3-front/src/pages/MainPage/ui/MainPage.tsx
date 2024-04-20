import { AreStillQuestions } from '@/shared/ui/AreStillQuestions/AreStillQuestions';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { HeroSectionMainPage } from '@/shared/ui/HeroSectionMainPage/HeroSectionMainPage';
import { UniversityCardMainPage } from '@/shared/ui/UniversityCardMainPage/UniversityCardMainPage';
import styles from './mainPage.module.scss';
import { useUniversityServiceGetUniversity } from '@/shared/api/openApi/queries';

export const MainPage = () => {
  const { data } = useUniversityServiceGetUniversity();

  console.log(data);

  return (
    <div className={styles.mainPage}>
      <HeaderMainPage />
      <HeroSectionMainPage />
      <AreStillQuestions />
      {data?.map((item) => (
        <UniversityCardMainPage
          universityName={item.name}
          location={item.email}
          backgroundImage={item.image && `http://localhost:3010/${item.image[0]}`}
        />
      ))}
    </div>
  );
};
