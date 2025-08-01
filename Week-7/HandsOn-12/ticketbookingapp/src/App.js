import React, { useState } from 'react';
import UserGreeting from './components/UserGreeting';
import GuestGreeting from './components/GuestGreeting';


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  
  let button;
  let greeting;
  
  if (isLoggedIn) {
    greeting = <UserGreeting />;
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    greeting = <GuestGreeting />;
    button = <LoginButton onClick={handleLogin} />;
  }

  return (
    <div >
      
        {greeting}
        {button}
      
    </div>
  );
}

export default App;