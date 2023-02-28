import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  //using ref to get content in the input
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  //each ref is an object with a current key
  //the object hold the DOM node, but isn't recommended to manipulate the DOM node
  //here, we are just reading the data in the input

  //setting the state for the username
  //const [userName, setUserName] = useState("");

  //setting the state for the user age
  //const [userAge, setUserAge] = useState("");

  //setting the form validation
  const [isFormValid, setIsFormValid] = useState(true);

  /*setting the handler for the username
  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  setting the handler for the user age
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  */

  //setting error handling messages
  const [errorMessage, setErrorMessage] = useState(null);

  //the add user handler when the form tries to submit
  const addUserHandler = (event) => {
    //prevent default submission behaviour
    event.preventDefault();

    //grab the values in the refs
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    //checking if the inputs are empty
    if (enteredName.trim().length === 0) {
      setErrorMessage({
        title: "Invalid Name",
        message: "Please, input a valid username",
      });
      setIsFormValid(false);
      return;
    }

    if (+enteredAge < 1 || enteredAge.trim().length === 0) {
      setErrorMessage({
        title: "Invalid Age",
        message: "Please, input a valid age",
      });
      setIsFormValid(false);
      return;
    }

    //form is validated and set the variable to true
    setIsFormValid(true);

    //calling the function from the parent and passing the input value as arguments
    props.addNewUser(enteredName, enteredAge);

    //reset the input fields
    //setUserAge("");
    //setUserName("");

    //reset the input value. It is not recomended to manipulate the DOM using refs
    //but in this scenario, I'm manipulating data the user entered
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  //for custom components, just add className doesn't work.
  //you have to go to the custom component and inject the classNames from the props
  //like this className={props.className} and don't forget to use `` or concatenate to
  //add other classes that might be used there too.

  return (
    <>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onClick={() => setErrorMessage(null)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            /*
            onChange={usernameChangeHandler}
            value={userName}
            */
            ref={nameInputRef}
          />
          <label htmlFor="userage">Age (years)</label>
          <input
            type="number"
            id="userage"
            /*
            onChange={userAgeChangeHandler}
            value={userAge}
            */
            ref={ageInputRef}
          />
          <Button btntype="submit" onClick={addUserHandler}>
            Add User
          </Button>
          {!isFormValid ? <p>Insert a valid name and age</p> : null}
        </form>
      </Card>
    </>
  );
};

export default AddUser;


//When the content of a component is being controlled by react, it is a controlled component. 
//the older approach of using useState made the input components controlled components.
//When the I used the Refs approach to connect the input, that made the input an uncontrolled component