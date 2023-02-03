import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )

    //to pass data from a child component to a parent component,you can create a listener in the parent component
    //using a name of your choice. And point to a function that will be triggered when something happen inside the component
    //there is a convention to start with the term on
    //after connecting all the stuff, you have to call the function inside the child component
    //the function is provided in the child component as a prop

};

export default NewExpense;