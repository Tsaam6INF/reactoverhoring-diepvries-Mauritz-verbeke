import "./App.css";
import React from "react";

export default function App() {
  // je object
  const diepvries = [
    {
      lade: 1,
      voeding: "worst",
      aantal: "4",
      gewicht: "200g",
      datumIngevoerd: new Date("2025-01-01"),
    },
    {
      lade: 1,
      voeding: "broccoli",
      aantal: "-",
      gewicht: "500g",
      datumIngevoerd: new Date("2025-01-02"),
    },
    {
      lade: 1,
      voeding: "biefstuk",
      aantal: "2",
      gewicht: "400g",
      datumIngevoerd: new Date("2025-01-03"),
    },
    {
      lade: 2,
      voeding: "hamburgers",
      aantal: "6",
      gewicht: "-",
      datumIngevoerd: new Date("2024-09-25"),
    },
    {
      lade: 3,
      voeding: "frieten",
      aantal: "1",
      gewicht: "1Kg",
      datumIngevoerd: new Date("2024-01-05"),
    },
  ];
  // functie is de lade maakt
  const toonVoorraadInlade = (ladeNummer) => {
    const productenInlade = diepvries.filter(
      (product) => product.lade === ladeNummer
    );
    // return van je div met je lades in
    return (
      <div key={ladeNummer}>
        <h2>lade {ladeNummer}</h2>
        <ul>
          {productenInlade.map(
            (
              product,
              index // Maakt idere lade aan met de bijhoorende data
            ) => (
              <li key={index}>
                {product.voeding} - Aantal: {product.aantal} - Gewicht:{" "}
                {product.gewicht} - Tijd {berekenTijd(product.datumIngevoerd)}
              </li>
            )
          )}
        </ul>
      </div>
    );
  };
  // berekent de tijd hoelang het al in de frigo zit
  const berekenTijd = (datumIngevoerd) => {
    const currentDate = new Date();
    const duration = currentDate - datumIngevoerd;
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    return `${days} days`;
  };

  // gaalt alle nummers van de laden die er zijn
  const getLadenNummers = (diepvries) => {
    const ladenNummers = [];

    diepvries.forEach((product) => {
      if (!ladenNummers.includes(product.lade)) {
        ladenNummers.push(product.lade);
      }
    });

    return ladenNummers;
  };
  // retunt de div met daarin de functie getladennummers
  return (
    <div>
      {getLadenNummers(diepvries).map((ladeNummer) =>
        toonVoorraadInlade(ladeNummer)
      )}
    </div>
  );
}
