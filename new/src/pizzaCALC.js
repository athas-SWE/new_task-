//import e from "cors";
// src/PizzaCALC.js
import React, { useState } from "react";

const PizzaCALC = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [piecesPerPerson, setPiecesPerPerson] = useState(1);

  const pizzaSizes = [
    { size: "5 inch", price: 3, slices: 4 },
    { size: "7 inch", price: 5, slices: 6 },
    { size: "10 inch", price: 8, slices: 10 },
    { size: "15 inch", price: 12, slices: 15 },
    { size: "24 inch", price: 18, slices: 24 },
  ];

  const calculateCost = (size) => {
    const slicesNeeded = numPeople * piecesPerPerson;
    const pizzasNeeded = Math.ceil(slicesNeeded / size.slices);
    return pizzasNeeded * size.price;
  };

  const getLowestCostPizza = () => {
    let lowestCost = Infinity;
    let lowestCostSize = null;

    pizzaSizes.forEach((size) => {
      const cost = calculateCost(size);
      if (cost < lowestCost) {
        lowestCost = cost;
        lowestCostSize = size;
      }
    });

    return lowestCostSize;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "numPeople") {
      setNumPeople(value);
    } else if (name === "piecesPerPerson") {
      setPiecesPerPerson(value);
    }
  };

  const lowestCostPizza = getLowestCostPizza();

  return (
    <div>
      <label>
        Number of People:
        <input
          type="number"
          name="numPeople"
          value={numPeople}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Pieces Per Person:
        <input
          type="number"
          name="piecesPerPerson"
          value={piecesPerPerson}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <h2>Pizza Sizes:</h2>
      {pizzaSizes.map((size) => (
        <div key={size.size}>
          <p>
            {size.size} - ${size.price} - {calculateCost(size)}$
            {lowestCostPizza === size && " (Lowest Cost)"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PizzaCALC;
