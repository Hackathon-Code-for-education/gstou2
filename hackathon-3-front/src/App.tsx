import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';
import '@/app/axios/axiosDefault';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
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
