import SignInPage from '../pages/sign-in/SignInPage';
import SignUpPage from '../pages/sign-up/SignUpPage';
import InvitationPage from '../pages/invitation/InvitationPage';
import MyListPage from '../pages/my-list/MyListPage';
import MyItemPage from '../pages/my-item/MyItemPage';
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
      { path: '/invitation/:id', component: InvitationPage },
    ],
  },
  {
    component: PrivateRoute,
    routes: [
      { path: '/my-list', component: MyListPage },
      { path: '/my-list/:id', component: MyItemPage },
      { path: '/my-groups', component: MyGroupsPage },
      { path: '/my-groups/:id', component: MyGroupPage },
    ],
  },
];

export default allRoutes;
