import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    //state de parcours de l'Api
    const [data, setData] = useState([]);

    //state de limite d'affichage d'occurences
    const [rangeValue, setRangeValue] = useState(36);

    // array continents
    const radios = ["Africa", "America", "Europe", "Asia", "Oceania"];
    // useState Continents radio
    const [selectedRadio, setSelectedRadio] = useState("");

    // useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="countries">
            {/* container radios */}
            <ul className="radio-container">
                {/* display flags */}
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />

                {/* map radio Continent  */}
                {radios.map((continent) => (
                    <li>
                        <label htmlFor="Afrique"> {continent} </label>
                        <input
                            type="radio"
                            id={continent}
                            name="radioContinent" // link all radios
                            checked={continent === selectedRadio} // Raz radio checked
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                    </li>
                ))}

                {/* display number countries */}
                <p>Affichage pays : {rangeValue}</p>
            </ul>

            {/* display annuler la recherche */}
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>
                    Annuler la recherche
                </button>
            )}

            {/* display flags */}
            <ul>
                {data
                    // continents filter
                    .filter((country) =>
                        country.continents[0].includes(selectedRadio)
                    )
                    // filter populations
                    // .sort((a, b) => b.population - a.population)
                    .sort((a, b) => a.population - b.population)
                    // Limitation de l'affichage du nb d'occurences
                    .slice(0, rangeValue)
                    // parcours de l'API
                    .map((country, index) => (
                        // <li>{country.translations.fra.common}</li>
                        <Card key={index} country={country} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;
