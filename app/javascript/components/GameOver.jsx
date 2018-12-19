import React from 'react';
import NonogramDisplay from "./NonogramDisplay";

class Game extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2 className='title'>{this.props.clue}</h2>
        <h1 className='title'>{this.props.name}</h1>
        <NonogramDisplay {...this.props} />
      </div>
    );
  }
}

export default Game;
