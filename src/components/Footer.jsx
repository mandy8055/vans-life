import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
const Footer = () => {
  return (
    <footer>
      &copy; {dayjs().year()}&nbsp;
      <Link to='/'>#VANLIFE</Link>
    </footer>
  );
};

export default Footer;
