import React, { Component } from 'react';

class PlayToggleButton extends Component {
  render() {
    return (
      <button 
        className="play-toggle-button"
        onClick={this.props.togglePlaying}
      >
        {this.props.isPlaying ? 'Pause' : 'Play'}
      </button>
    );
  }
}

export default PlayToggleButton;
