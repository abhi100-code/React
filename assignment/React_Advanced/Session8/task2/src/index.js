import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { UserProvider } from "./context/UserContext";
import { FavoritesProvider } from "./context/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <UserProvider>

    <FavoritesProvider>

      <App />

    </FavoritesProvider>

  </UserProvider>

);