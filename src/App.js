import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";

import useGet from "./hooks/useGet";
import { searchByTitle } from "./API/API.envy";

import SearchBar from "./components/SearchBar/SearchBar";
import FilmView from "./components/FilmView/FilmView";

function App() {
    const [input, setInput] = useState('');
    const foundFilms = useGet(searchByTitle(input), [], `results`);

    return (
        <div className="App">
            <Router>
                <SearchBar setInput={setInput}/>
                <FilmView input={input} foundFilms={foundFilms}/>
            </Router>
        </div>
    );
}

export default App;