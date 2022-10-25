import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState ([]);
    // video à 1 h 12 mn
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="countries">
            <h1>Countries</h1>
        </div>
    );
};

export default Countries;
