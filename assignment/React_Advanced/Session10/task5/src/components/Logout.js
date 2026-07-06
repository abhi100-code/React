import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Logout() {

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;