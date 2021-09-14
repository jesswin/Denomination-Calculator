import { useContext, useState } from "react";
import DenominationContext from "../store/denomination-context";
import classes from "./MoneyRow.Module.css";

const MoneyRow = (props) => {
  const [amount, setAmount] = useState(0);
  const denominationCtx = useContext(DenominationContext);
  const { denomination } = props;
  const amountChangeHandler = (event) => {
    setAmount(denomination * event.target.value);
    denominationCtx.getPieces(denomination, event.target.value);
  };
 
  return (
    <>
      <div className={classes.main}>
        <p className={classes.para}>{denomination} x</p>
        <input
          type="text"
          value={denominationCtx.piecesCount[denomination]}
          onChange={amountChangeHandler}
        />
        <p className={classes.para}> ₹{amount}</p>
      </div>
      <hr />
    </>
  );
};

export default MoneyRow;
