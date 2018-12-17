import React from "react"

class Game extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>{this.props.name}</h1>
        <p className="subtitle">
          Solve this puzzle or I'll <strong>delete your family</strong>
        </p>
      </div>
    );
  }
}

export default Game;