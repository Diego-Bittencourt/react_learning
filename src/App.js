import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    //the first argument of the useEffect() hooks is a function.
    //It doesn't have to be an arrow function, but is the most often used
    //and the function runs everytime the dependencies change, including the first time the app runs.

    //using the useEffect to chech the local storage
    const storedLog = localStorage.getItem('isLoggedIn');
    if (storedLog === '1') {
      setIsLoggedIn(true);
    }

  }, [])
  //if the dependencies of the useEffect hook are empty, it only runs on the component first load

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem('isLoggedIn', '1');


    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
