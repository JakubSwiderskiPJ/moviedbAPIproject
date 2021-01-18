import React from 'react';
import './FoundFilmsList.scss';

import FoundFilms from "../FoundFilms/FoundFilms";
import FilmsNotFound from "../FilmsNotFound/FilmsNotFound";

export default function FoundFilmsList({ input, foundFilms }) {

    return (
        <ul className='found-film-list found-film-list-size found-film-list-border'
            style={{opacity: (input.length > 0) ? 1 : 0}} >
            {/* {condition && component} - condition rendering */}
            {foundFilms.length > 0 && foundFilms.map(film => (
                <FoundFilms film={film} />))}
            {foundFilms.length === 0 && <FilmsNotFound input={input} />}
        </ul>
    );
}