import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { dispatch } = useContext(ThemeContext);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;