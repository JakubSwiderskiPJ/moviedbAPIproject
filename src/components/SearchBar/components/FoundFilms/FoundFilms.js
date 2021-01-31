import React from 'react';
import './FoundFilms.scss';
import { genreURL, toPage } from '../../../../API/API.envy';

import useGet from '../../../../hooks/useGet';
import useDirectorName from '../../../../hooks/useDirectorName';
import useTopActors from '../../../../hooks/useTopActors';


export default function FoundFilm({ film }) {
    const genres = useGet(genreURL(film.id), [], `genres`);
    const actors = useTopActors(film.id);
    const directorName = useDirectorName(film.id);

    // Gallery work area

    /*const galery = useGet();
    const galleryURL = `https://api.themoviedb.org/3/movie/${film.id}/images?api_key=f3ee5d85c3a33b8437e40136ab986b03`;*/

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
            </div>

            <div className='gallery'>

            </div>
        </li>
    );
}