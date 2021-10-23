import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Shops = lazy(() => import('pages/Shops'));
const ShopDetails = lazy(() => import('pages/Shops/details'));
const About = lazy(() => import('pages/About'));

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/shops', name: 'Shops', component: Shops, exact: true },
  { path: '/shops/:shopId', name: 'ShopDetails', component: ShopDetails },
  { path: '/about', name: 'About', component: About },
];

export default routes;
