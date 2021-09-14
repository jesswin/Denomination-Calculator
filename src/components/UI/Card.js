import classes from "./Card.Module.css";

const Card = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }} className={classes.card}>
      {props.children}
    </div>
  );
};

export default Card;
