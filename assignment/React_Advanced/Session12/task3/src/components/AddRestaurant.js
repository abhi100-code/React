import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function AddRestaurant() {
  const [restaurants, setRestaurants] = useState([]);

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
      console.error("Error fetching restaurants:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Restaurant List</h2>

      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <ul>
          {restaurants.map((restaurant) => (
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