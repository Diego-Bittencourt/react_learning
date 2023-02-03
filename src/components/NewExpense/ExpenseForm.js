import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //a component can have multiple states at the same time and they are changed separately
    //there is also another approach, create and object the holds all the data.
    //You can create this approach by passing a object to the useState()
    //It's important to keep in mind that when the object is change, the object received as arguments replaces the data in memory.
    //When changeing one part of the object in the useState, we have to spead the current object with the
    //spreading operator and override the old data with the new data.
    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const [enteredAmount, setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('')

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        console.log(expenseData)

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
        //using this approach doesn't work like it would work on Vue
        //to use the similar approach, I have to implement two way binding by using the
        //built-in value propertie and use React's syntax to connect to the state
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;