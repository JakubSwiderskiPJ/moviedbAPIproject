import React from 'react';
import {popularURL} from "../../API/API.envy";
import useGet from "../../hooks/useGet";
import FoundFilms from "../SearchBar/components/FoundFilms/FoundFilms";

export default function TopFilms() {
    const topFilms = useGet(popularURL, [], `results`)
    return (
        <article>
            <ul>
                {topFilms.map(topFilm => (
                    <FoundFilms film={topFilm} />
                ))}
            </ul>
        </article>
    );
}