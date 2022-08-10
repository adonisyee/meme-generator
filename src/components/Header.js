import React from "react";
import "../css/styles.css";

export default function Header() {
    return (
        <div className="header-container">
            <img className="header-logo" src="../img/meme-logo.png" alt="meme logo" />
            <h1 className="header-title">Meme Generator</h1>
            <h3>React Project</h3>
        </div>
    )
}
