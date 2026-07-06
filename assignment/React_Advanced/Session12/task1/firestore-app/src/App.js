import React from "react";
import { db } from "./firebase";

function App() {
  console.log(db);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Firebase Firestore Connected Successfully!</h1>
    </div>
  );
}

export default App;