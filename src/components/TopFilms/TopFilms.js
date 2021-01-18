import React, {useState} from 'react';
import './TopFilms.scss'
import useGet from "../../hooks/useGet";
import {popularURL} from "../../API/API.envy";
import FoundFilmsList from "../SearchBar/components/FoundFilmsList/FoundFilmsList";

export default function TopFilms() {


    // us custom
    const TopFilms = useGet(popularURL());

    return (
        <article className="top-film-article top-film-article-bg-img">
            <form className="top-film-form top-film-form-size">
                <label htmlFor="top-film-bar"
                       className='top-film-area top-film-area-size
                                  top-film-area-position'>
                </label>
            </form>
        </article>
    );
}