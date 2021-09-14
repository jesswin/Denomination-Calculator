import { useContext } from "react";
import Denomation from "../MoneyRows/Denomination";
import DenominationContext from "../store/denomination-context";
import classes from "./Calc.Module.css";

const Calc = () => {
  const denominationCtx = useContext(DenominationContext);
  let count = 0;
  for (let key in denominationCtx.totalNotes) {
    count += +denominationCtx.totalNotes[key];
  }
  return (
    <>
      <div className={classes.main}>
        <p className={classes.para}>Denomination</p>
        <p className={classes.para}>Pieces</p>
        <p className={classes.para}>Amount</p>
      </div>
      <Denomation />
      <div className={classes.main}>
        <p className={classes.total}>Total</p>
        <p className={classes.pieces}>{count}</p>
        <p className={classes.amount}>₹{denominationCtx.piecesCount}</p>
      </div>
    </>
  );
};
export default Calc;
