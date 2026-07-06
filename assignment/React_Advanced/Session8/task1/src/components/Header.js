import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { state } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: state.theme === "light" ? "#f4f4f4" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Current Theme: {state.theme.toUpperCase()}</h1>
    </header>
  );
}

export default Header;