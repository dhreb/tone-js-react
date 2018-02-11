import './App.css';

import React, { Component } from 'react';
import SoundGrid from './SoundGrid';
import Tone from 'tone';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Fun with WebAudio!</h1>
        <SoundGrid />
      </div>
    );
  }

  componentDidMount() {
    // var synth = new Tone.Synth().toMaster();
    // synth.triggerAttackRelease("D#2", "16n");
  }
}

export default App;
