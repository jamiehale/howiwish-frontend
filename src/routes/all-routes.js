import LoginPage from '../pages/login/LoginPage';
import MyListPage from '../pages/my-list/MyListPage';
import MyGroupsPage from '../pages/my-groups/MyGroupsPage';
import AdminNavPage from '../pages/admin/nav/AdminNavPage';
import AdminGroupsPage from '../pages/admin/groups/AdminGroupsPage';

export const allPublicRoutes = [
  { path: '/login', component: LoginPage },
];

export const allPrivateRoutes = [
  { path: '/my-list', component: MyListPage },
  { path: '/my-groups', component: MyGroupsPage },  
];

export const allAdminRoutes = [
  { path: '/admin', component: AdminNavPage },
  { path: '/admin/groups', component: AdminGroupsPage },
];
