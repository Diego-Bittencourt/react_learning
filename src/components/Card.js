import "./Card.css";

function Card(props) {
  //to use a component as a wrapper, like a layout card, you can wrap
  //the content inside the component and use the props.children built-in
  //props to make is work.

  //to use classes being passed as props, we have to use the props.className
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
