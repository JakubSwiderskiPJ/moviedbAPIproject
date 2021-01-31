import React from 'react';
import './SearchBar.scss';
import { Link } from "react-router-dom";

export default function SearchFilm({ setInput, searchType, setSearchType }) {

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
            <div className="search-by">
                <div
                    onClick={() => setSearchType(false)}
                    style={{
                        background: !searchType ? `#01B4E4` : `#F2F2F2`,
                        color: !searchType ? `#F2F2F2` : `#2d2d2d`}}
                >By Genre</div>
                <div
                    onClick={() => setSearchType(true)}
                    style={{
                        background: searchType ? `#01B4E4` : `#F2F2F2`,
                        color: searchType ? `#F2F2F2` : `#2d2d2d`}}
                >By Name</div>
            </div>
        </article>
    );
}