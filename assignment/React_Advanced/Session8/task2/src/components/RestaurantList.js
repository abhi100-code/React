import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const restaurants = [
  { id: 101, name: "Pizza Hut" },
  { id: 102, name: "Burger King" },
  { id: 103, name: "Domino's Pizza" },
  { id: 104, name: "Subway" },
];

function RestaurantList() {

  const { state, dispatch } = useContext(FavoritesContext);

  return (
    <div>

      <h2>Restaurants</h2>

      {restaurants.map((restaurant) => {

        const isFavorite =
          state.favorites.includes(restaurant.id);

        return (
          <div
            key={restaurant.id}
            style={{
              marginBottom: "15px",
              border: "1px solid gray",
              padding: "10px",
            }}
          >
            <h3>{restaurant.name}</h3>

            {isFavorite ? (
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FAVORITE",
                    payload: restaurant.id,
                  })
                }
              >
                Remove Favorite
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_FAVORITE",
                    payload: restaurant.id,
                  })
                }
              >
                Add Favorite
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantList;