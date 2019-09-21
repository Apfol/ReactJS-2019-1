import React from 'react';
import Classes from './App.css';
import List from './Body/list.js';
import Title from './Header/title.js';

function App() {
  return (
    <div className = {Classes.App}>
      <Title></Title>
      <List></List>
    </div>
  );
}

export default App;
