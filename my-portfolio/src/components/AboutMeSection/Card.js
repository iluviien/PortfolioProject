import "./Card.css";
function CardElement(props) {
  const classes = "card " + props.className;

  return (
    <div className="card-container">
      <div className={classes}>{props.children}</div>
    </div>
  );
}

export default CardElement;
