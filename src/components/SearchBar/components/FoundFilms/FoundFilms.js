import React, { useState, useEffect, useCallback} from 'react';
import './FoundFilms.scss';
import {filmData, movieURL, posterURL} from "../../../../API/API.envy";
import axios from "axios";

export default function FoundFilms({ film }) {

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
            <div className="poster poster-border poster-size" style={{backgroundImage: `url(${posterURL(film.poster_path)})`}} />
            <main className="film-content">
                <h1>{film.title}</h1>
                <p>{(film.vote_average === 0) ? `Unvoted` : `Vote: ${film.vote_average}`}</p>
                <p>{film.overview}</p>
                <p>{film.release_date}</p>
{/*
                <p>{console.log(fetchFilmData)}</p>
*/}
                {console.log(fetchFilmData.data)}
            </main>
        </li>
    );
}