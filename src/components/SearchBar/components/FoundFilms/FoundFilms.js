import React from 'react';
import ReactPlayer from "react-player";
import './FoundFilms.scss';
import { genreURL, toPage } from '../../../../API/API.envy';

import useGet from '../../../../hooks/useGet';
import useDirectorName from '../../../../hooks/useDirectorName';
import useTopActors from '../../../../hooks/useTopActors';
import Gallery from "../../../Gallery/Gallery";
import useVideo from "../../../../hooks/useVideo";


export default function FoundFilm({ film }) {
    const genres = useGet(genreURL(film.id), [], `genres`);
    const actors = useTopActors(film.id);
    const directorName = useDirectorName(film.id);
    const youtubeURL = useVideo(film.id);


    return (
        <li className='film-card film-card-size film-card-border'>
            <aside className='poster' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${film.poster_path})`}} />
            <div className="film-content">
                <header className='film-title'>
                    <a rel="noreferrer" href={toPage(film.id, film.title)} target="_blank"><h1>{film.title}</h1></a>
                    <span>{film.release_date}</span>
                    <p>{genres.map(g => g.name).join(', ')}</p>
                </header>
                <main className='film-overview'>
                    <p>Overview: {film.overview}</p>
                    <p>Cast: {actors.join(', ')}</p>
                    <p>Director: {directorName}</p>
                </main>
                <footer className='film-votes'>
                    <p>{(film.vote_average === 0) ? `Unvoted` : `Vote: ${film.vote_average}`}</p>
                    <span>{(film.vote_count === 1) ? `${film.vote_count} vote` : `${film.vote_count} votes`}</span>
                </footer>

                <Gallery filmId={film.id} />
                <ReactPlayer url={youtubeURL} />

            </div>
        </li>
    );
}