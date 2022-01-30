import { Link } from 'react-router-dom';
import { AuthState } from '../../reducers/auth/auth-reducer';
import './topbar.scss';

interface TopBarState {
  logged: boolean;
}

const TopBar = ({ logged }: TopBarState) => (
  <>
    <nav className="top-bar">
      <Link className="linkto" to="/">
        Home
      </Link>
      {!logged && (
        <Link className="linkto" to="/login">
          Login
        </Link>
      )}
      {logged && <Link to="/projects">my proyects</Link>}
    </nav>
  </>
);

export default TopBar;
