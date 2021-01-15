import React from 'react';
import './SearchBar.scss';

export default function SearchBar() {



    return (
        <form>
            <label htmlFor="search-bar">Znajdź Swój Film...</label>
            <input id="search-bar" type="text"/>
        </form>
    );
};