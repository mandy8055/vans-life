import { Link } from 'react-router-dom';
import { ABOUT_ROUTE, HOME_ROUTE, HOST_ROUTE, VANS_ROUTE } from '../constants';

const Header = () => {
  return (
    <header>
      <Link className='site-logo' to={HOME_ROUTE}>
        #VanLife
      </Link>
      <nav>
        <Link to={HOST_ROUTE}>Host</Link>
        <Link to={ABOUT_ROUTE}>About</Link>
        <Link to={VANS_ROUTE}>Vans</Link>
      </nav>
    </header>
  );
};

export default Header;
