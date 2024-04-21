import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import '@/app/axios/axiosDefault';
import { Redirect } from './shared/hooks/redirect';
import { MainPage } from './pages/MainPage';
import { UniversityPage } from './pages/UniversityPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { Panorama } from './widgets/Panorama';
import { DormitoryPage } from './pages/DormitoryPage/ui/DormitoryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import AddNews from './widgets/AddNews/ui/AddNews';
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
      path: '/university/info/:id',
      element: <UniversityPage />,
    },
    {
      path: '/profile/:id',
      element: <ProfilePage />,
    },
    {
      path: '/panorama',
      element: <PanoramaPage />
    },
    {
      path: '/dormitore/:id',
      element: <DormitoryPage />
    },
    {
      path: '/addNews',
      element: <AddNews />
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
