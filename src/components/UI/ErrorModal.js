import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

//creating a backdrop component
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

//creating a overlay component
const Overlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClick}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};


//placing the modal in a different place can be achieved by using ReactDOM.createPortal()
//the function must be imported, suggestion, as ReactDOM from "react-dom"
//Each ReactDom.createPortal() receives two arguments. The first is the jsx element
//to be rendered and the second is a DOM node, that can be stored in a variable
//or called directly using the document API.
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

//in order to avoid the div soupt, you can use the <React.fragment> or just <>
//to wrap the return statement and fulfill the jsx requiremente and not end
//with a div soup

export default ErrorModal;
