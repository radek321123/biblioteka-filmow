'use client';

import Link from 'next/link'
import useFetch from "../hooks/useFetch";
import {useEffect, useRef, useState} from "react";


export default function MoviesList() {
    const {data, loading, error} = useFetch('/api/filmy');
    const [refreshKey, setRefreshKey] = useState(0);
    const [query, setQuery] = useState("");
    const searchRef = useRef(null);

    function refreshIncrement() {
        setRefreshKey(prevKey => prevKey + 1);
    }

    const filteredMovies = data?.filter(film =>
        film.title.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        searchRef.current?.focus()
    }, [])


    if (error) {
        console.log(error)
        return (
            <>
                <input
                    ref={searchRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                />
                <p>
                    {error}
                </p>
            </>
        );
    }

    if (loading) {
        return (
            <>
                <input
                    ref={searchRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                />
                <p>
                    Loading...
                </p>
            </>

        );
    }

    return (
        <>
            <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
            />
            <button onClick={refreshIncrement}>refresh {refreshKey}</button>
            <ul>
                {filteredMovies?.map(film => (
                    <li key={film.id}>
                        <Link href={`/filmy/${film.id}`}>
                            {film.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>

    );


}