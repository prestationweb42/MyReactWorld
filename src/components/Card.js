import React from "react";

const Card = ({ country }) => {
    // console.log(country);
    // console.log(country.capital);
    // console.log(country.continents);
    return (
        <div>
            <li className="card">
                <img
                    src={country.flags.svg}
                    alt={"drapeau " + country.translations.fra.common}
                />
                <div className="infos">
                    <h2>
                        {country.translations.fra.common} <br />
                        {country.capital}
                    </h2>
                    <p>Pop. {country.population.toLocaleString()} </p>
                </div>
            </li>
        </div>
    );
};

export default Card;
