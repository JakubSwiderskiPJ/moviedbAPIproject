import React from 'react';
import { Route, Switch } from "react-router-dom";
import TopFilms from "../TopFilms/TopFilms";
import FoundFilmsList from "../SearchBar/components/FoundFilmsList/FoundFilmsList";

export default function FilmView({ input, foundFilms }) {

    return (
        <Switch>
            <Route exact path="/">
                <TopFilms />
            </Route>
            <Route path="/search">
                <FoundFilmsList input={input} foundFilms={foundFilms}/>
            </Route>
        </Switch>
    );
}