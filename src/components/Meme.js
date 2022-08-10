import React from "react";
import "../css/styles.css";

export default function Meme() {
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/30b1gx.jpg"
        }
    );

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const newMemeImage = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: newMemeImage
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="meme-form">
                <input
                    className="meme-input"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className="meme-input"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={handleClick} className="meme-button">Get a new meme image <img src="../img/pic-emoji.png" /> </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} alt="meme"/>
                <h2 className="meme-top_text">{meme.topText}</h2>
                <h2 className="meme-bottom_text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
