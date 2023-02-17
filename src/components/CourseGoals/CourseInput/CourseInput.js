import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';


//you can have more than one component per file. It isn't recommended,
//but you might have a component which is only used in another component,
//hence makes sense to keep in the same file.

//you can add props to the styled component and use the `` syntax to use inside the component
const FormControl = styled.div`

  margin: 0.5rem 0;

  & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

  & input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;



const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl>
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : 'black', backgroundColor: !isValid ? 'pink' : '#33333333'}} type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
