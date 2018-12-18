import React from "react";
import NonogramPuzzle from "./NonogramPuzzle";

class Game extends React.Component {
  render() {
    return (
      <div className='container'>
        <p className="subtitle">
          Solve this puzzle or I'll <strong>delete your family</strong>
        </p>
        <NonogramPuzzle {...this.props} />
      </div>
    );
  }
}

export default Game;
