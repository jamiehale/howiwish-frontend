import SignInPage from '../pages/sign-in/SignInPage';
import SignUpPage from '../pages/sign-up/SignUpPage';
import MyListPage from '../pages/my-list/MyListPage';
import MyGroupsPage from '../pages/my-groups/MyGroupsPage';
import MyGroupPage from '../pages/my-group/MyGroupPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const allRoutes = [
  {
    component: PublicRoute,
    routes: [
      { path: '/sign-in', component: SignInPage },
      { path: '/sign-up', component: SignUpPage },
    ],
  },
  {
    component: PrivateRoute,
    routes: [
      { path: '/my-list', component: MyListPage },
      { path: '/my-groups', component: MyGroupsPage },
      { path: '/my-groups/:id', component: MyGroupPage },
    ],
  },
];

export default allRoutes;
