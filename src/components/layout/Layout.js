import MainNavigation from "./MainNavigation/MainNavigation";
import classes from "./Layout.Module.css";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div className={classes.flexible}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
