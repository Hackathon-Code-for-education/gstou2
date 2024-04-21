import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import '@/app/axios/axiosDefault';
import { Redirect } from './shared/hooks/redirect';
import { MainPage } from './pages/MainPage';
import { UniversityPage } from './pages/UniversityPage';
import { Panorama } from './widgets/Panorama';
import { DormitoryPage } from './pages/DormitoryPage/ui/DormitoryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PanoramaPage } from './pages/PanoramaPage';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Redirect />,
    },
    {
      path: '/main',
      element: <MainPage />,
    },
    {
      path: '/signIn',
      element: <AuthPage />,
    },
    {
      path: '/signUp',
      element: <AuthPage />,
    },
    {
      path: '/university/:id',
      element: <UniversityPage />,
    },
    {
      path: '/panorama',
      element: <PanoramaPage />
    },
    {
      path: '/dormitory',
      element: <DormitoryPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }

    // {
    //   path: "/my_accaunt",
    //   element: <ProfilePage />,
    //   children: [
    //     {
    //       path: "personal_info",
    //       element: <Profile />,
    //     },
    //     {
    //       path: "favorites",
    //       element: <Favorites />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
