import React from "react";
import "./css/styles.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
    return (
        <div className="container">
            <Header />
            <Meme />
        </div>
    )
}
