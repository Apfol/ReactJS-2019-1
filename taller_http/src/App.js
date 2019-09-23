import React from 'react';
import appStyle from './App.css';
import MovieList from './components/MovieList';
function App() {
  return (
    <div className={appStyle.App}>
        <MovieList></MovieList>
    </div>
  );
}

export default App;
