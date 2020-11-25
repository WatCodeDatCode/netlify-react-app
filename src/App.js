import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Content from "./components/AuthContext";
import AuthContext from "./components/AuthContext";

function App() {
  const [loginToken, setLoginToken] = useState(null);

  const handleLogin = (token) => {
    //alert(`Login with token ${token}`);
    setLoginToken(token);
  };

  const handleLogout = () => {
    alert("You have been logged out");
    setLoginToken(null);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={loginToken}>
        {!loginToken && <Login onLogin={handleLogin} />}
        {loginToken && (
          <>
            <Content />
            <button onClick={handleLogout}>Log out</button>
          </>
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
