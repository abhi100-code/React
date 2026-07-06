import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function AddRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterCuisine, setFilterCuisine] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "restaurants"));

      const restaurantList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRestaurants(restaurantList);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    }
  };

  // Filter restaurants based on cuisine
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.cuisine
      .toLowerCase()
      .includes(filterCuisine.toLowerCase())
  );

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h2>Restaurant List</h2>

      <input
        type="text"
        placeholder="Filter by Cuisine (Italian, Chinese...)"
        value={filterCuisine}
        onChange={(e) => setFilterCuisine(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      {filteredRestaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <ul>
          {filteredRestaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <strong>Name:</strong> {restaurant.name}
              <br />
              <strong>Cuisine:</strong> {restaurant.cuisine}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddRestaurant;