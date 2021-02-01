import React from 'react';
import { Route, Switch } from "react-router-dom";
import TopFilms from "../TopFilms/TopFilms";
import FoundFilmsList from "../SearchBar/components/FoundFilmsList/FoundFilmsList";

export default function FilmView({ input, foundFilms, foundGenres, searchType }) {

    return (
        <Switch>
            <Route exact path="/">
                <TopFilms />
            </Route>
            <Route path="/search">
                {searchType && <FoundFilmsList input={input} foundFilms={foundFilms}/>}
                {!searchType && <FoundFilmsList input={input} foundFilms={foundGenres}/>}
            </Route>
        </Switch>
    );
}