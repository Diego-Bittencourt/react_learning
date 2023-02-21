import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const addNewUser = (username, userage) => {
    const user = { name: username, age: userage, index: Math.random().toString() };
    setUsersList((lastUsersList) => {
      return [user, ...lastUsersList];
    });
  };

  const deleteUser = (userIndex) => {
    setUsersList((lastUsersList) => {
      return lastUsersList.filter(e => 
        e.index !== userIndex
      )
    })
  }

  const [usersList, setUsersList] = useState([]);

  return (
    <div>
      <AddUser addNewUser={addNewUser} />
      <UsersList users={usersList} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
