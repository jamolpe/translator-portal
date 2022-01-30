import { Link } from 'react-router-dom';
import './topbar.scss';
const TopBar = () => (
  <>
    <nav className="top-bar">
      <Link className="linkto" to="/">
        Home
      </Link>
      <Link className="linkto" to="/login">
        Login
      </Link>
    </nav>
  </>
);

export default TopBar;
