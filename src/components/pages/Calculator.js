import Card from "../UI/Card";
import Calc from "../Calc/Calc";
import classes from "./Calculator.Module.css";
import { useContext, useEffect, useState } from "react";
import DenominationContext from "../store/denomination-context";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useHistory } from "react-router";

const Calculator = () => {
  const denominationCtx = useContext(DenominationContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return denominationCtx.getPieces(0, 0);
  }, []);

  const Deposite = () => {
    setLoading(true);
    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    const finalDay = day + "-" + month + "-" + year;
    fetch(
      "https://denomination-calc-default-rtdb.firebaseio.com/denomination.json",
      {
        method: "POST",
        body: JSON.stringify({
          ...denominationCtx.totalNotes,
          total: denominationCtx.piecesCount,
          date: finalDay,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((_) => {
        denominationCtx.getPieces(0, 0);
        setLoading(false);
        history.push("/Deposited");
      })
      .catch((err) => {
        denominationCtx.getPieces(0, 0);
        setLoading(false);
        alert("An Error Occured");
      });
  };

  return (
    <>
      {loading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!loading && (
        <Card>
          <Calc />
        </Card>
      )}
      <button
        disabled={loading}
        className={
          loading ? classes.buttonPrimaryDisabled : classes.buttonPrimary
        }
        onClick={Deposite}
      >
        Deposit
      </button>
      <div style={{ clear: "right" }}></div>
    </>
  );
};

export default Calculator;
