import { Login } from '../pages/Login';
import { Page404 } from '../pages/Page404';
import { Setting } from '../pages/Setting';
import { UserManagement } from '../pages/UserMnageent';

export const homeRoutes = [
  {
    path: '/login',
    children: <Login />,
  },
  {
    path: '/user_management',
    children: <UserManagement />,
  },
  {
    path: '/setting',
    children: <Setting />,
  },
  {
    path: '*',
    children: <Page404 />,
  },
];
