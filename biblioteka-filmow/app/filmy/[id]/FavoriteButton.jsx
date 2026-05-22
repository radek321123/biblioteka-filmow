"use client"

import {useState} from "react";

export default function FavoriteButton(){
    const [favorite, setFavorite] = useState(false);

    function setIsFavorite(){
        setFavorite(prevState => !prevState);
    }

    if (favorite) {
        return (
            <button onClick={setIsFavorite}>
                usun z ulubionych
            </button>
        )
    }

    return (
        <button onClick={setIsFavorite}>
            dodaj do ulubionych
        </button>
    )
}