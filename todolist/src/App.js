import React from 'react';
import classes from './App.css';
import Activity from './Components/Activity';
import AddActivity from './Components/AddActivity';

function App() {
  return (
    <div className={classes.App}>
      <AddActivity/>      
    </div>
  );
}

export default App;
