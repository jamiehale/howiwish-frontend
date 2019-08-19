import LoginPage from '../pages/login/LoginPage';
import MyListPage from '../pages/my-list/MyListPage';
import MyGroupsPage from '../pages/my-groups/MyGroupsPage';
import AdminNavPage from '../pages/admin/nav/AdminNavPage';
import AdminGroupsPage from '../pages/admin/groups/AdminGroupsPage';
import AdminUsersPage from '../pages/admin/users/AdminUsersPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

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
  {
    component: AdminRoute,
    routes: [
      { path: '/admin', component: AdminNavPage },
      { path: '/admin/groups', component: AdminGroupsPage },
      { path: '/admin/users', component: AdminUsersPage },
    ],
  },
];

export default allRoutes;
