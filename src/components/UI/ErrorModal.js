import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

//in order to avoid the div soupt, you can use the <React.fragment> or just <>
//to wrap the return statement and fulfill the jsx requiremente and not end
//with a div soup

export default ErrorModal;
