import React, { useState } from 'react';
import './SearchBar.scss';

import FoundFilmsList from "./components/FoundFilmsList/FoundFilmsList";
import { searchByTitle } from "../../API/API.envy";
import useGet from "../../hooks/useGet";

export default function SearchBar() {
    // input state
    const [input, setInput] = useState('');
    // us custom
    const foundFilms = useGet(searchByTitle(input));

    const [searchCategoryVisibility, setSearchCategoryVisibility] = useState(false);

    return (
        <article className="search-film-article search-film-article-bg-img">
            <div className='form-sizer'>
                <form className="search-film-form search-film-form-size">
                    <label htmlFor="search-film-bar" />
                    <input id="search-film-bar"
                           type="text"
                           className="search-film-input search-film-input-size
                                      search-film-input-border search-film-font"
                           placeholder="Search Films..."
                           onChange={event => setInput(event.target.value)} />
                </form>
                <div className='filter-categories filter-categories-border filter-categories-position
                                    filter-categories-size' onClick={() => setSearchCategoryVisibility(!searchCategoryVisibility)}>Filters</div>
            </div>
    <div className='search-film-area search-film-area-size
                                  search-film-area-position'>
        <ul className="filter-categories-list filter-categories-list-position" style={{opacity: `${searchCategoryVisibility ? 1 : 0}`}}>
            <li>Release Date</li>
            <li>Genre</li>
        </ul>
        <FoundFilmsList
            input={input}
            foundFilms={foundFilms}/>
    </div>
        </article>
    );
}