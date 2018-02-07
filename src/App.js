import React, { Component } from 'react';
import Tone from 'tone';
class App extends Component {
  render() {

    return (
      <div className="App">

      </div>
    );
  }

  componentDidMount() {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("D#2", "8n");
  }
}

export default App;
