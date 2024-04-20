import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import '@/app/axios/axiosDefault';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
