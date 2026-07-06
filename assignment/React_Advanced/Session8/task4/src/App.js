import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profile from "./components/Profile";
import UpdateName from "./components/UpdateName";

function App() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Instagram Clone</h1>

      {!state.isLoggedIn ? (
        <button
          onClick={() =>
            dispatch({
              type: "LOGIN",
              payload: {
                displayName: "Abhi Patel",
                email: "abhi@gmail.com",
              },
            })
          }
        >
          Login
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({
              type: "LOGOUT",
            })
          }
        >
          Logout
        </button>
      )}

      <hr />

      <Profile />

      <UpdateName />
    </div>
  );
}

export default App;