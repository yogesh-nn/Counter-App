// import axios from "axios";
// import { useState } from "react"

// export function DogBreedFunc() {
//     const [breed, setBreed] = useState("https://dog.ceo/api/breeds/image/random");

//     async fetchData = (breed) => {
//         const data = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
//         setBreed(data);
//     }



//     return <div>
//         <form action="">
//             <label><h1>Select a Breed: </h1></label>
//             <select name="DogBreed">
//                 <option>hello</option>
//             </select>
//         </form>
//     </div>
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

export const DogBreedFunc = () => {
  const [selectedBreed, setSelectedBreed] = useState("Random");
  const [imageUrl, setImageUrl] = useState("");
  const breeds = ["Random", "Beagle", "Boxer", "Dalmatian", "Husky"];

  // Fetch random image on component load or when the breed changes
  useEffect(() => {
    fetchDogImage();
  }, [selectedBreed]);

  // Function to fetch a random dog image or breed-specific image
  const fetchDogImage = async () => {
    try {
      const endpoint =
        selectedBreed === "Random"
          ? "https://dog.ceo/api/breeds/image/random"
          : `https://dog.ceo/api/breed/${selectedBreed.toLowerCase()}/images/random`;
      const response = await axios.get(endpoint);
      setImageUrl(response.data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  // Handle breed selection
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Dog Pics</h1>
      <div>
        <label htmlFor="breed-select">Select Breed:</label>
        <select
          id="breed-select"
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div style={{ margin: "20px" }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Dog"
            style={{ maxWidth: "400px", borderRadius: "8px" }}
          />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
      <button onClick={fetchDogImage} style={{ padding: "10px 20px" }}>
        Next
      </button>
    </div>
  );
};
