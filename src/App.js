import './App.css';

import React, { Component } from 'react';
import SoundGrid from './SoundGrid';
import PlayToggleButton from './PlayToggleButton';
import Tone from 'tone';

var synth = new Tone.PluckSynth().toMaster()

class App extends Component {
  constructor() {
    super();
    Tone.Transport.schedule(this.triggerSynth, 0);
    Tone.Transport.schedule(this.triggerSynth, '0:2');
    Tone.Transport.schedule(this.triggerSynth, '0:2:2.5');
    Tone.Transport.loopEnd = '1m';
    Tone.Transport.loop = true;
    // Tone.Transport.start('+0.0');

    this.state = {
      playing: false,
    }
  }

  triggerSynth(time) {
    synth.triggerAttackRelease('C2', '8n', time);
  }

  togglePlaying() {    
    if (this.state.playing) {
      this.setState({playing: false });
      Tone.Transport.stop();
    } else {
      this.setState({ playing: true });
      Tone.Transport.start('+0.0');
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Fun with WebAudio!</h1>
        <SoundGrid />
        <PlayToggleButton 
          togglePlaying={this.togglePlaying.bind(this)}
          isPlaying={this.state.playing}
        />        
      </div>
    );
  }
}

export default App;
