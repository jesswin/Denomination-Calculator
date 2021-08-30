import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.Module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">Money Depositer</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <NavLink to="/Calculator" activeClassName={classes.active}>
            Calculator
          </NavLink>
          <NavLink to="/Deposited" activeClassName={classes.active}>
            Deposited
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
