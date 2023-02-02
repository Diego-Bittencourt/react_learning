import React, { useState } from 'react';
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

  //calling useState
  const [title, setTitle] = useState(props.title);
  //the useState() hook returns the value before change and a function to change the value, inside an array

  //the props have information about the date. This props is redirected to another child component,

  //you can only have one root element per each return statement

  //to use the card component as a wrapper to pass content inside it, you have to set
  //the props.children built-in props to be displayed inside the wrapper component
  //all components receive that props, even if you don't set it.

  //let title = props.title;

  //you can create a function that can be triggered when an event happens.
  //to list to an event, we can add the on and the event in the element we want to listen.
  //React listens to all built-in events in the html elements.
  //You can create an arrow function, but this is not ideal
  const clickHandler = () => {
    setTitle('Changed')
    //in react, you don't assign a variable to a new value like normal JS like below
    //title = 'Changed'
    //to change a value and makes the app reactive, I have to use the changing function
    //returned from useState() and use the function to change the variable.
    //when using the setTItle() function, it makes the component be called again and render the element

  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

//now have to export the function-component
export default ExpenseItem;
