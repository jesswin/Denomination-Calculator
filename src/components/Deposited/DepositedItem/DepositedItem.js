import React, { useState } from "react";
import Card from "../../UI/Card";
import Date from "./Date/Date";
import classes from "./DepositedItem.Module.css";
const DepositedItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = Object.keys(props.data)
    .filter((element) => {
      return element !== "total" && element !== "date" && element !== "id";
    })
    .map((d) => {
      return (
        <p key={d}>
          ₹{d} x {props.data[d]} = {d * props.data[d]}
        </p>
      );
    });

  const date = props.data.date.split("-");
  const day = date[0];
  const month = date[1];
  const year = date[2];

  const openClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.layout} onClick={openClickHandler}>
      <Card bgColor="#c2e7f0">
        <div className={classes.container}>
          <Date day={day} month={month} year={year} />
          <p className={classes.total}>₹{props.data["total"]}</p>
        </div>
        <div className={isOpen ? classes.visible : classes.hidden}>{data}</div>
      </Card>
    </div>
  );
};

export default React.memo(DepositedItem);
