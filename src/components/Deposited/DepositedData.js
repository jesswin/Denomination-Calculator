import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import DepositedItem from "./DepositedItem/DepositedItem";
import classes from "./DepositedData.Module.css";

const DepositedData = () => {
  const [loading, setLoading] = useState(false);
  const [denominations, setDenominations] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch(
        "https://denomination-calc-default-rtdb.firebaseio.com/denomination.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const tempList = [];
          for (let key in data) {
            tempList.push({
              id: key,
              ...data[key],
            });
          }
          setDenominations(tempList);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.lastDiv}>
        {denominations !== null &&
          !loading &&
          denominations.map((d) => {
            return <DepositedItem key={d.id} data={d} />;
          })}
      </div>
    </>
  );
};

export default DepositedData;
