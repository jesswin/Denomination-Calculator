import classes from "./Welcome.Module.css";
const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <p>Welcome to denominationCalculator.</p>
      <p>
        This calculator helps to calculate the denominations and sum of them.
        This will save you whenever you go to deposit money in bank and get
        confused with denominations and their sum.
      </p>
      <figcaption>- Jesswin</figcaption>
    </div>
  );
};

export default Welcome;
