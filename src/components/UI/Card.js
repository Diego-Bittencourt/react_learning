import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {

    //if your custom component receives classes, you have to assign it from the props 
    //like below.
    return (
        <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    )
};

export default Card;