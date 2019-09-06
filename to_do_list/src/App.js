import React from 'react';
import './App.css';
import ListItem from './item/ListItem';
import Title from './header/Title';

function App() {
  return (
    <div>
      <header>
        <Title></Title>
      </header>
      <ListItem></ListItem>  
    </div>
  );
}

export default App;
