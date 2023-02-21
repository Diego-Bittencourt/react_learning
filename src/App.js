import React from 'react';
import AddUser from './components/Users/AddUsers';


function App() {

  const addNewUser = (username, userage) => {
    console.log('in the App.js', username, userage);
  };


  return (
    <div>
      <AddUser addNewUser={addNewUser} />
    </div>
  );
}

export default App;
