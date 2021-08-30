import MainNavigation from "./MainNavigation";
import classes from "./Layout.Module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};
export default Layout;
