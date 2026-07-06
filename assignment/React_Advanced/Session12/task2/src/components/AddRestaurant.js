import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddRestaurant() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || cuisine === "") {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "restaurants"), {
        name: name,
        cuisine: cuisine,
      });

      alert("Restaurant Added Successfully!");

      setName("");
      setCuisine("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding restaurant");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Add Restaurant</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            placeholder="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurant;