'use client';

import FavoriteButton from "./FavoriteButton";
import {useState, useEffect} from 'react';
import {notFound, usePathname} from "next/navigation";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function MovieList() {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [pageId, setPageId] = useState(usePathname().split("/")[2]);


    useEffect(() => {
        async function fetchMovies() {
            await fetch('/api/filmy')
                .then(data => data.json())
                .then(data => data.filter(movie => parseInt(pageId) === parseInt(movie.id)))
                .then(data => setMovie(data[0]))
                .finally(() => setLoading(false));
        }

        fetchMovies();
    }, []);



    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }


    if (!movie) {
        notFound()
    }


    return (
        <>
            {(
                <div key={pageId}>
                    <p>{movie.title}</p>
                    <p>{movie.year}</p>
                    <p>{movie.genre}</p>
                    <FavoriteButton/>
                </div>
            )}
        </>
    );
}