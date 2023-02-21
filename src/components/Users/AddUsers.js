import React from "react";
import styles from "./AddUser.module.css";

const AddUser = () => {
    const addUserHandler = (event) => {
        
        //prevent default submission behaviour
        event.preventDefault();
    };


    return (
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" />
            <label htmlFor="userage">Age (years)</label>
            <input type="number" id="userage" />
            <button type="submit">Add User</button>
        </form>
        </Card>
    )
};

export default AddUser;