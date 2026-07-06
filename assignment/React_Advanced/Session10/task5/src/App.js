import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h1>Firebase Authentication</h1>

      {user ? (
        <>
          <h3>Logged in as:</h3>
          <p>{user.email}</p>

          <Logout />
        </>
      ) : (
        <>
          <h3>No User Logged In</h3>
          <Login />
        </>
      )}

    </div>
  );
}

export default App;