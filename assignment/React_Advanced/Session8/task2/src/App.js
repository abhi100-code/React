import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import RestaurantList from "./components/RestaurantList";
import FavoriteList from "./components/FavoriteList";

function App() {

  const user = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Zomato Favorites</h1>

      <h2>Welcome, {user.name}</h2>

      <RestaurantList />

      <hr />

      <FavoriteList />

    </div>
  );
}

export default App;