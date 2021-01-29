import React, {useState, useEffect, useCallback} from 'react';
import './FoundFilms.scss';
import {filmData, movieURL, posterURL} from "../../../../API/API.envy";
import axios from "axios";

export default function FoundFilms({film}) {

    const [fetchFilmData, setFetchFilmData] = useState({});

    // useCallback - always recall if data changes
    const getDataFromAPI = useCallback(() => {
        // axios get call
        axios.get(movieURL)
            .then(response => {
                // save data to us state
                // console.log(response)
                setFetchFilmData(response)
            })
            .catch(error => console.error(`Error: ${error}`))
    }, [movieURL])

    // render result after state changes
    useEffect(() => {
        getDataFromAPI()
    }, [getDataFromAPI])

    return (
        <li className='film-card film-card-size film-card-border'>
            <div className="poster poster-border poster-size"
                 style={{backgroundImage: `url(${posterURL(film.poster_path)})`}}/>
            <article  className="film-content">
                <header className='content-header'>
                    <h1>{film.title}</h1>
                    <span>{film.release_date}</span>
                </header>
                <main className='content-overview'>
                    <p>{film.overview}</p>
                </main>
                <footer className='content-votes'>
                    <span>{(film.vote_average === 0) ? `Unvoted` : `Vote: ${film.vote_average}`}</span>
                    <span className='vote-count-size'> {film.vote_count} users votes</span>
                </footer>
            </article>
        </li>
    );
}