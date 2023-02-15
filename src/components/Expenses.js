import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filteredItems = props.items.filter(item =>  {
    return item.date.getFullYear().toString() === selectedYear
  } 
  );
  

  const changeFilter = (year) => {
    setSelectedYear(year.target.value);
  };

  

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onChangeFilter={changeFilter} />
      <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
