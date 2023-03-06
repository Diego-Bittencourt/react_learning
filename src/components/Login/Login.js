import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  console.log(state, action)

  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') };
  };

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  };

  return { value: '', isValid: false };

};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.length > 6 }
  };

  if (action.type === 'INPUT_BLUR') {
    console.log(state.value.length)
    return { value: state.value, isValid: state.value.length > 6}
  }

  return { value: '', isValid: false }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //reducer for the email
  const [userEmail, dispatchUserEmail] = useReducer(
    emailReducer,

    {
      value: '',
      isValid: null,
    },
  );

  //reducer for the password
  const [userPassword, dispatchUserPassword] = useReducer(
    passwordReducer,
    {
      value: '',
      isValid: null,
    }
  )

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  useEffect(() => {
    setFormIsValid(userEmail.isValid && userPassword.isValid)
  }, [userEmail.isValid, userPassword.isValid])

  const emailChangeHandler = (event) => {
    dispatchUserEmail({ type: 'USER_INPUT', value: event.target.value });
    console.log(userPassword)
    setFormIsValid(
      userEmail.isValid && userPassword.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchUserPassword({type: 'USER_INPUT', value: event.target.value})

    setFormIsValid(
      userEmail.isValid && userPassword.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchUserEmail({ type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchUserPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userEmail.value, userPassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            userEmail.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            //value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            userPassword.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            //value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
