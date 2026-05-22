'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link'

export default function ProductList() {
    let [films, setFilms] = useState([]);
    let [loading, setLoading] = useState(true);



    useEffect(() => {

        async function getFilms() {
            await fetch("/api/filmy")
            .then(res => res.json())
            .then(data => setFilms(data))
            .finally(() => setLoading(false));
        }

        getFilms()

    },[]);


    if (loading) {
        return (
            <p>
                Loading...
            </p>
        );
    }

    return (
        <ul>
            {films.map(film => (
                <li key={film.id}>
                    <Link  href={"/filmy/" + film.id} >{film.title}</Link>
                </li>))
            }
        </ul>
    );


}