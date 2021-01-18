import React from 'react';
import './FoundFilms.scss';

export default function FoundFilms({ film }) {

    return (
        <li className='film-card film-card-size film-card-border'>
            <p>{film.original_title}</p>
            <p>{(film.vote_average === 0) ? `Unvoted` : `Vote: ${film.vote_average}`}</p>
        </li>
    );
}