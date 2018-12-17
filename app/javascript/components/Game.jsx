import React from "react"

class Game extends React.Component {
  render() {
    return (
      <div id="game-panel">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Game;