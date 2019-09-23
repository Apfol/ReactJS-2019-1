import React from "react";
import Emoji from 'react-emoji-render';
export default function header() {
  return (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
          The lyrics sharing application v0.1
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Emoji text="Donate🤑"/>
      </a>
    </header>
  );
}
