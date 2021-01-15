import React, { useState } from 'react';
import './SearchBar.scss';
import ResultItem from "../ResultItem/ResultItem";

export default function SearchBar() {

    const [result, setResult] = useState([]);

    

    return (
        <article className='search-film-bar'>
            <form className='search-film-form'>
                <label htmlFor="search-bar" />
                <input id="search-bar"
                       className='search-film-input search-film-input-justification'
                       type="text"
                       placeholder='Wpisz tytuł filmu..' />
            </form>
            <ul className="search-result-list">
                <ResultItem />
            </ul>
        </article>
    );
};