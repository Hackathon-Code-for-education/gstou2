import { AreStillQuestions } from '@/shared/ui/AreStillQuestions/AreStillQuestions';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { HeroSectionMainPage } from '@/shared/ui/HeroSectionMainPage/HeroSectionMainPage';
import styles from './mainPage.module.scss';
import { UniversityCards } from '@/widgets/UniversityCards/UniversityCards';

export const MainPage = () => {

  return (
    <div className={styles.mainPage}>
      <HeaderMainPage />
      <HeroSectionMainPage />
      <AreStillQuestions />
      <UniversityCards />
    </div>
  );
};
