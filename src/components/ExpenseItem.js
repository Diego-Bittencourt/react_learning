//all React components are function that return html code
//you can name the function in anyway, but it's a good practice to
//repeat the file name

import "./ExpenseItem.css";
//you shoudl import the css files in the component

function ExpenseItem() {
  //you can only have one root element per each return statement
  return (
    <div className="expense-item">
      <div>March 28th, 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

//now have to export the function-component
export default ExpenseItem;
