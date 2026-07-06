import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function UpdateName() {
  const { state, dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");

  if (!state.isLoggedIn) return null;

  const updateName = () => {
    dispatch({
      type: "UPDATE_NAME",
      payload: name,
    });

    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={updateName}>
        Update Name
      </button>
    </div>
  );
}

export default UpdateName;