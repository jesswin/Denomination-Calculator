import classes from "./Date.Module.css";

const Date = (props) => {
  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{props.month}</div>
      <div className={classes["expense-date__year"]}>{props.year}</div>
      <div className={classes["expense-date__day"]}>{props.day}</div>
    </div>
  );
};

export default Date;
