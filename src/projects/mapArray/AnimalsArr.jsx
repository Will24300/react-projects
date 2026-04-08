import React from "react";

function AnimalsArr() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <>
      {animals.map((animal, index) => (
        <ul key={index}>
          <li>{animal}</li>
        </ul>
      ))}
    </>
  );
}

export default AnimalsArr;
