import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <h2>Please Login</h2>;
  }

  return (
    <div>
      <h2>Instagram Profile</h2>

      <h3>Name: {state.user.displayName}</h3>

      <p>Email: {state.user.email}</p>
    </div>
  );
}

export default Profile;