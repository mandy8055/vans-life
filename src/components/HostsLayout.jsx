import { Link } from 'react-router-dom';
import { HOST_ROUTE, INCOME_ROUTE, REVIEWS_ROUTE } from '../constants';
import { Outlet } from 'react-router-dom';

const HostsLayout = () => {
  return (
    <>
      <nav className='host-nav'>
        <Link to={`../${HOST_ROUTE}`}>Dashboard</Link>
        <Link to={INCOME_ROUTE}>Income</Link>
        <Link to={REVIEWS_ROUTE}>Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostsLayout;
