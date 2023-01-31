//all React components are function that return html code
//you can name the function in anyway, but it's a good practice to
//repeat the file name

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
//you shoudl import the css files in the component

function ExpenseItem(props) {
  //react assures that each component receives one parameter as object with all props received

  //the props have information about the date. This props is redirected to another child component,

  //you can only have one root element per each return statement
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

//now have to export the function-component
export default ExpenseItem;
