import React from 'react';
import './TopFilmsList.scss'
import useGet from "../../hooks/useGet";
import {popularURL} from "../../API/API.envy";
import TopFilmItem from "./components/TopFilmItem/TopFilmItem";


export default function TopFilmsList() {

    // us custom
    const topFilms = useGet(popularURL);

    return (
        <article>
            <ul>
                {topFilms.map(film => (
                    <TopFilmItem film={film} />
                ))}
            </ul>
        </article>
    );
}