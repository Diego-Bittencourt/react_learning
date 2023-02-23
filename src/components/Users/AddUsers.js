import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    //setting the state for the username
    const [userName, setUserName] = useState('');

    //setting the state for the user age
    const [userAge, setUserAge] = useState('');

    //setting the form validation
    const [isFormValid, setIsFormValid] = useState(true)


    //setting the handler for the username
    const usernameChangeHandler = event => {
        setUserName(event.target.value)
    };

    //setting the handler for the user age
    const userAgeChangeHandler = event => {
        setUserAge(event.target.value)
    };

    //setting error handling messages
    const [errorMessage, setErrorMessage] = useState(null)

    //the add user handler when the form tries to submit
    const addUserHandler = (event) => {
        //prevent default submission behaviour
        event.preventDefault();

        //checking if the inputs are empty
        if (userName.trim().length === 0) {
            setErrorMessage({title: 'Invalid Name', message: 'Please, input a valid username'})
            setIsFormValid(false);
            return;
        }

        if (+userAge < 1 || userAge.trim().length === 0) {
          setErrorMessage({title: 'Invalid Age', message: 'Please, input a valid age'})
          setIsFormValid(false);
          return;
        }

        //form is validated and set the variable to true
        setIsFormValid(true);

        //calling the function from the parent and passing the input value as arguments
        props.addNewUser(userName, userAge)

        //reset the input fields
        setUserAge('');
        setUserName('');
    };

  //for custom components, just add className doesn't work. 
  //you have to go to the custom component and inject the classNames from the props
  //like this className={props.className} and don't forget to use `` or concatenate to
  //add other classes that might be used there too.

  return (
    <>
    {errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onClick={() => setErrorMessage(null)}/>}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" onChange={usernameChangeHandler} value={userName} />
        <label htmlFor="userage">Age (years)</label>
        <input type="number" id="userage" onChange={userAgeChangeHandler} value={userAge} />
        <Button btntype="submit" onClick={addUserHandler}>Add User</Button>
        { !isFormValid ? <p>Insert a valid name and age</p> : null}
      </form>
    </Card>
    </>
  );
};

export default AddUser;
