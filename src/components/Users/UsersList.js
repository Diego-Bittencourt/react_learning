import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
import Button from "../UI/Button";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.index} data-id={user.index}>
            <p>{user.name}, {user.age} years old.</p>
            <Button type="button" onClick={() => props.deleteUser(user.index)}>Delete User</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
