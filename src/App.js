import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";

import useGet from "./hooks/useGet";
import { searchByTitleURL, searchByGenre } from "./API/API.envy";


import SearchBar from "./components/SearchBar/SearchBar";
import FilmView from "./components/FilmView/FilmView";
import useGenreId from "./hooks/useGenreId";

function App() {
    const [input, setInput] = useState('');
    // if true - by name, if false - by genre
    const [searchType, setSearchType] = useState(true);

    const foundFilms = useGet(searchByTitleURL(input), [], `results`);

    const genreId = useGenreId(input);
    const foundGenres = useGet(searchByGenre(genreId), [], `results`)

    return (
        <div className="App">
            <Router>
                <SearchBar
                    setInput={setInput}
                    searchType={searchType}
                    setSearchType={setSearchType} />

                {searchType && <FilmView input={input} foundFilms={foundFilms}/>}
                {!searchType && <FilmView input={input} foundFilms={foundGenres}/>}


            </Router>
        </div>
    );
}

export default App;