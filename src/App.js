import React from 'react';
import './App.css';
import spacekitty from './spacekitty.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spacekitty} className="App-logo" alt="spacekitty"/>
        <p>
          WeLcOmE tO kItTiEs In SpAaAaAcE!
          <br></br>
          The classic game of kitties in space jumping from one crater to another without getting sucked up by UFOs' tractor beams.
        </p>

      </header>
    </div>
  );
}

export default App;
