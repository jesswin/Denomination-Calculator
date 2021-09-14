import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.Module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/" activeClassName={classes.active} exact>
          denominationCalculator
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/Calculator" activeClassName={classes.active}>
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/Deposited" activeClassName={classes.active}>
              Deposited
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
