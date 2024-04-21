import { useSignOut } from '@/shared/hooks';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { HeroSectionMainPage } from '@/shared/ui/HeroSectionMainPage/HeroSectionMainPage';
import { StatItemMainPage } from '@/shared/ui/StatItemMainPage/StatItemMainPage';
import { UniversityCardMainPage } from '@/shared/ui/UniversityCardMainPage/UniversityCardMainPage';
import { UniversityCardsMainPage } from '@/shared/ui/UniversityCardsMainPage/UniversityCardsMainPage';
import { WeAreHelpingWith } from '@/shared/ui/WeAreHelpingWith/WeAreHelpingWith';
import { Icon, SideBar } from 'gentlemen-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';
export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderMainPage />
      <HeroSectionMainPage />
      <StatItemMainPage />
      <WeAreHelpingWith />
      <UniversityCardsMainPage />
    </div>
  );
};
