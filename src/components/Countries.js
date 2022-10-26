import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);
    // useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="countries">
            <h1>Countries</h1>
            <ul>
                {data.map((country) => (
                    // <li>{country.translations.fra.common}</li>
                    <Card />
                ))}
            </ul>
        </div>
    );
};

export default Countries;
