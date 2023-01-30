//all React components are function that return html code
//you can name the function in anyway, but it's a good practice to
//repeat the file name

import "./ExpenseItem.css";
//you shoudl import the css files in the component

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  //you can only have one root element per each return statement
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

//now have to export the function-component
export default ExpenseItem;
