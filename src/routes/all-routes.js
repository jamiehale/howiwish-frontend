import LoginPage from '../pages/login/LoginPage';
import MyListPage from '../pages/my-list/MyListPage';
import MyGroupsPage from '../pages/my-groups/MyGroupsPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const allRoutes = [
  {
    component: PublicRoute,
    routes: [
      { path: '/login', component: LoginPage },
    ],
  },
  {
    component: PrivateRoute,
    routes: [
      { path: '/my-list', component: MyListPage },
      { path: '/my-groups', component: MyGroupsPage },    
    ],
  },
];

export default allRoutes;
