import React from 'react';
import './App.scss';
import SearchBar from "./components/SearchBar/SearchBar";
import TopFilms from "./components/TopFilms/TopFilms";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TopFilms />
      <Footer />
    </div>
  );
}

export default App;
