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
            <form className="search-film-form search-film-form-size">
                <label htmlFor="search-film-bar"
                       className='search-film-area search-film-area-size
                                  search-film-area-position'>
                    {/* onChange event - if u put something to input the state 'll change */}
                    <input id="search-film-bar"
                           type="text"
                           className="search-film-input search-film-input-size
                                      search-film-input-border search-film-font"
                           placeholder="Search Films..."
                           onChange={event => setInput(event.target.value)}>
                    </input>
                    <div className='categories' onClick={() => setSearchCategoryVisibility(!searchCategoryVisibility)}>Y</div>
                    <div className="categories-list" style={{opacity: `${searchCategoryVisibility ? 1 : 0}`}}>
                        <p>release date</p>
                    </div>
                    <FoundFilmsList
                        input={input}
                        foundFilms={foundFilms}/>
                </label>
            </form>
        </article>
    );
}