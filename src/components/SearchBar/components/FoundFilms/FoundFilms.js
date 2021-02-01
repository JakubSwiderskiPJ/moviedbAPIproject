import React from 'react';
import './FoundFilms.scss';
import ReactPlayer from 'react-player';
import {genreURL, poster, toPage} from '../../../../API/API.envy';

import useGet from '../../../../hooks/useGet';
import useDirectorName from '../../../../hooks/useDirectorName';
import useTopActors from '../../../../hooks/useTopActors';
import Gallery from "../../../Gallery/Gallery";
import useVideo from "../../../../hooks/useVideo";


export default function FoundFilm({film}) {
    const genres = useGet(genreURL(film.id), [], `genres`);
    const actors = useTopActors(film.id);
    const directorName = useDirectorName(film.id);
    const youtubeURL = useVideo(film.id);

    return (
        <li className='film-card film-card-border'>
            <div className="film-data">
                <aside className='poster' style={{backgroundImage: `url(${poster(film.poster_path)})`}}/>
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
                </div>
            </div>
            <div className="film-media">
                <Gallery filmId={film.id}/>
                <ReactPlayer url={youtubeURL}/>
            </div>
        </li>
    );
}