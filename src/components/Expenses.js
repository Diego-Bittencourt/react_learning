import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const changeFilter = (year) => {
    setSelectedYear(year.target.value);
  };

  return (
    <div>
      <ExpensesFilter changeFilter={changeFilter} />
      <Card className="expenses">
        { filtered}
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
