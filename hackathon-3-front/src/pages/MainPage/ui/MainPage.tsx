import { useSignOut } from '@/shared/hooks';
import { HeaderMainPage } from '@/shared/ui/HeaderMainPage/HeaderMainPage';
import { Icon, SideBar } from 'gentlemen-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';
export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderMainPage />
    </div>
  );
};
