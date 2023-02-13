import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filteredItems = props.items.filter(item =>  {
    return item.date.getFullYear().toString() === selectedYear
  } 
  );
  

  const changeFilter = (year) => {
    setSelectedYear(year.target.value);
  };

  let expensesContent = <p>No expenses found.</p>
  //You can hold jsx content in a variable

  if(filteredItems.length) {
    expensesContent = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  //using an if statemente to overwrite the expensesContent if there is data

  return (
    <div>
      <ExpensesFilter changeFilter={changeFilter} />
      <Card className="expenses">
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
