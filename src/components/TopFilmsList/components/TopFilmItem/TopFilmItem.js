import React from 'react';
import './TopFilmItem.scss'


export default function TopFilmItem({ film }){


    return(
        <li>
            <header>
                <h1>{film.original_title}</h1>
            </header>
        </li>
    );
}