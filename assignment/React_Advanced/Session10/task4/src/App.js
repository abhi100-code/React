import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

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

      <h2>
        {user
          ? `Logged in as: ${user.email}`
          : "No User Logged In"}
      </h2>

      <Login />

    </div>
  );
}

export default App;