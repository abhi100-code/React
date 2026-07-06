import React, { useContext } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { state } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: state.theme === "light" ? "#fff" : "#222",
        color: state.theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <Header />
      <ThemeToggle />
    </div>
  );
}

export default App;