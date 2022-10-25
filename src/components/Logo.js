import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            {/* les images importées avec la balise img sont accessibles comme si on étai DANS le dossier public, voir la syntaxe */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;
