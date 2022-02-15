import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import YangLOGO from '../../Assets/YangLOGO.svg';

const MainNavigation = () => {
  const isLoggedIn = true;

  return (
    <header className={ classes.header }>
      <Link to="/">
        <img src={ YangLOGO } alt="Yang LOGO"></img>
      </Link>
      <nav>
        <ul>
          { !isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          ) }
          { isLoggedIn && (
            <li>
              <Link to="/home">Profile</Link>
            </li>
          ) }
          { isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          ) }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
