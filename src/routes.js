import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import LoadingScreen from './components/common/LoadingScreen';
import FrameLayout from './components/FrameLayout';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Dashboard = Loadable(lazy(() => import('./pages/dashboard/Dashboard')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));

const routes = [
  {
    path: '',
    element: <Welcome />
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'custom-path',
        element: <h1>custom-path</h1>
      }
    ]
  },
  {
    path: '*',
    element: <FrameLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/" replace />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
