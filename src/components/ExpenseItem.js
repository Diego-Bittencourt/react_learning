import React from "react";
//to make the app reactive and change the data, we need to use the state
//usint the function useState from react.
//there are other hooks and they all start with 'use' and they must be called
//inside a react component
//they cannot be called outside the component function nor
//in a nested function. They must be called directly inside the component function

//all React components are function that return html code
//you can name the function in anyway, but it's a good practice to
//repeat the file name

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
//you shoudl import the css files in the component

function ExpenseItem(props) {
  //react assures that each component receives one parameter as object with all props received

  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

//now have to export the function-component
export default ExpenseItem;
