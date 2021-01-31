import React from 'react';
import './SearchBar.scss';
import { Link } from "react-router-dom";

export default function SearchFilm({ setInput }) {

    return (
        <article className="search-film-article search-film-article-bg-img">
            <form className='search-film-form search-film-form-size'>
                <label htmlFor="search-film-bar"/>
                <input id="search-film-bar"
                       type="text"
                       className="search-film-input search-film-input-size
                                      search-film-input-border search-film-font"
                       placeholder="Search Films..."
                       onChange={event => setInput(event.target.value)}/>
                <Link to="/search">Search</Link>
            </form>
        </article>
    );
}