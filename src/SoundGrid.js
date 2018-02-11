import React, { Component } from 'react';
import SoundButton from './SoundButton';

const NUMBER_OF_BEATS = 16;
let row = [];

class SoundGrid extends Component {
  constructor() {
    super();
    this.populateRow();
  }

  populateRow() {
    for (let i=0; i < NUMBER_OF_BEATS; i++ ) {
      row.push(<SoundButton key={i} />);
    };
  }
  
  render() {
    return (
      <div className="sound-grid">
        { row }
      </div>
    );
  }
}

export default SoundGrid;
