import { AreStillQuestions } from '@/shared/ui/AreStillQuestions/AreStillQuestions';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { HeroSectionMainPage } from '@/shared/ui/HeroSectionMainPage/HeroSectionMainPage';
import { StatItemMainPage } from '@/shared/ui/StatItemMainPage/StatItemMainPage';
import { UniversityCardsMainPage } from '@/shared/ui/UniversityCardsMainPage/UniversityCardsMainPage';
import { WeAreHelpingWith } from '@/shared/ui/WeAreHelpingWith/WeAreHelpingWith';
import styles from './mainPage.module.scss';
import { useUniversityServiceGetUniversity } from '@/shared/api/openApi/queries';

export const MainPage = () => {
  const { data } = useUniversityServiceGetUniversity();
  return (
    <div className={styles.mainPage}>
      <HeaderMainPage />
      <HeroSectionMainPage />
      <StatItemMainPage />
      <WeAreHelpingWith />
      <UniversityCardsMainPage />
      <AreStillQuestions />
      {/* {data?.map((item) => (
        <UniversityCardMainPage
          universityName={item.name}
          location={item.email}
          backgroundImage={item.image && `http://localhost:3010/${item.image[0]}`}
        />
      ))} */}

      {/* сделай внутри блока UniversityCardsMainPage */}
    </div>
  );
};
