import "./App.css";
import React from "react";

export default function App() {
  const diepvries = [
    { lade: 1, voeding: "worst", aantal: "4", gewicht: "200g" },
    { lade: 1, voeding: "broccoli", aantal: "-", gewicht: "500g" },
    { lade: 1, voeding: "biefstuk", aantal: "2", gewicht: "400g" },
    { lade: 2, voeding: "hamburgers", aantal: "6", gewicht: "-" },
    { lade: 3, voeding: "frieten", aantal: "1", gewicht: "1Kg" },
  ];

  const toonVoorraadInlade = (ladeNummer) => {
    const productenInlade = diepvries.filter(
      (product) => product.lade === ladeNummer
    );

    return (
      <div key={ladeNummer}>
        <h2>lade {ladeNummer}</h2>
        <ul>
          {productenInlade.map((product, index) => (
            <li key={index}>
              {product.voeding} - Aantal: {product.aantal} - Gewicht:{" "}
              {product.gewicht}
            </li>
          ))}
        </ul>
      </div>
    );
  };



  return (
    <div>
      {toonVoorraadInlade(ladeNummer))}
    </div>
  );
}
