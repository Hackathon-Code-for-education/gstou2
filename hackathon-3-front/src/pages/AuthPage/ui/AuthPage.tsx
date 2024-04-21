import { AuthCarousel } from '@/widgets/AuthCarousel';
import { AuthForm } from '@/widgets/AuthForm';

import styles from './authPage.module.scss';

export const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <AuthForm />
      <AuthCarousel />
    </div>
  );
};
