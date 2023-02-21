import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = () => {
  const addUserHandler = (event) => {
    //prevent default submission behaviour
    event.preventDefault();
  };

  //for custom components, just add className doesn't work. 
  //you have to go to the custom component and inject the classNames from the props
  //like this className={props.className} and don't forget to use `` or concatenate to
  //add other classes that might be used there too.

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" />
        <label htmlFor="userage">Age (years)</label>
        <input type="number" id="userage" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
