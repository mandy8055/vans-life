import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home, VanDetail, Vans } from '../pages';
import Layout from '../components/Layout';
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  VANS_DETAIL_ROUTE,
  VANS_ROUTE,
} from '../constants';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={VANS_ROUTE} element={<Vans />} />
          <Route path={VANS_DETAIL_ROUTE} element={<VanDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
