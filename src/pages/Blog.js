import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
    //
    const [content, setContent] = useState("");
    //
    const [error, setError] = useState(false);
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        //
        if (content.length < 140) {
            setError(true);
        } else {
            setError(false);
        }
    };
    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Nom" />
                <textarea
                    style={{
                        border: error ? "2px solid red" : "2px solid green",
                    }}
                    placeholder="Message"
                    onChangeCapture={(e) => setContent(e.target.value)}
                ></textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractères </p>}
                <input type="submit" value="Envoyez" />
            </form>
            <ul></ul>
        </div>
    );
};

export default Blog;
