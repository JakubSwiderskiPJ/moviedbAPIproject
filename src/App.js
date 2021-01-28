import React from 'react';
import './App.scss';
import SearchBar from "./components/SearchBar/SearchBar";
import TopFilmsList from "./components/TopFilmsList/TopFilmsList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TopFilmsList />
      <Footer />
    </div>
  );
}

export default App;
