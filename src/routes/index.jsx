import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  About,
  Dashboard,
  Home,
  Income,
  Reviews,
  VanDetail,
  Vans,
} from '../pages';

import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  HOST_ROUTE,
  INCOME_ROUTE,
  REVIEWS_ROUTE,
  VANS_DETAIL_ROUTE,
  VANS_ROUTE,
} from '../constants';
import { HostsLayout, Layout } from '../components';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={VANS_ROUTE} element={<Vans />} />
          <Route path={VANS_DETAIL_ROUTE} element={<VanDetail />} />
          <Route path={HOST_ROUTE} element={<HostsLayout />}>
            <Route index element={<Dashboard />} />
            <Route path={INCOME_ROUTE} element={<Income />} />
            <Route path={REVIEWS_ROUTE} element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
