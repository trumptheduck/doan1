import { Login } from '../components/layout/login';
import { Home } from '../components/layout/home/index';
import { Register } from '../components/layout/register';
import { HomeBegin } from '../components/layout/home/homeBegin';

const publicRoutes = [
  { path: '/begin', component: HomeBegin },
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

export { publicRoutes };
