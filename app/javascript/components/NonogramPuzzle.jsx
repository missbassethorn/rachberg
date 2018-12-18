import React from "react"
import PropTypes from 'prop-types'

class NonogramPuzzle extends React.Component {
  render() {
    const maxHorizontalClueChunks = Math.max(...this.props.horizontalClues.map(clue => clue.length));
    const maxVerticalClueChunks = Math.max(...this.props.verticalClues.map(clue => clue.length));

    const rows = this.props.horizontalClues.map((rowClue, i) => {
      return (
        <tr key={`row-${i}`}>
          <HorizontalClue
            clues={rowClue}
            maxChunks={maxHorizontalClueChunks}
            row={i} />
          <td>???</td>
          <td>???</td>
          <td>???</td>
          <td>???</td>
          <td>???</td>
        </tr>
      );
    });

    return (
      <table className="nonogram playable">
        <tbody>
          <VerticalClues
            clues={this.props.verticalClues}
            maxVerticalChunks={maxVerticalClueChunks}
            maxHorizonalChunks={maxHorizontalClueChunks} />
          {rows}
        </tbody>
      </table>
    );
  }
}

NonogramPuzzle.propTypes = {
  horizontalClues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  verticalClues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  // width: PropTypes.integer,
  // length: PropTypes.integer
}

class HorizontalClue extends React.Component {
  render() {
    const paddingNeeded = this.props.maxChunks - this.props.clues.length;
    let padding = [];
    for (let i = 0; i < paddingNeeded; i++) {
      padding.push(<th key={`pad-col${i}-row${this.props.row}`}></th>);
    }

    const chunks = this.props.clues.map((chunk, i) => {
      return (
        <th key={`clue-col${i}-row${this.props.row}`}>
          {chunk.length}
        </th>
      );
    });

    return [padding, chunks];
  }
}

HorizontalClue.propTypes = {
  clues: PropTypes.arrayOf(PropTypes.object).isRequired,
  row: PropTypes.number.isRequired,
  maxChunks: PropTypes.number.isRequired
}

class VerticalClues extends React.Component {
  render() {
    const clues = zipArray(this.props.clues);
    const rows = [];

    for (let rowIndex = 0; rowIndex < this.props.maxVerticalChunks; rowIndex++) {
      const padding = [];
      for (let i = 0; i < this.props.maxHorizonalChunks; i++) {
        padding.push(<th key={`corner-pad-row${rowIndex}-col${i}`}></th>);
      }

      const rowClues = clues[rowIndex].map((chunk, i) => {
        if (chunk) {
          return (
          <th key={`clue-col${i}-row${rowIndex}`}>
            {chunk.length}
          </th>
          );
        } else {
          return <th key={`pad-col${i}-row${rowIndex}`}></th>
        }
      });

      rows.push(
        <tr key={`vert-clues-row-${rowIndex}`}>
          {padding}
          {rowClues}
        </tr>
      );
    }

    return rows;
  }
}

VerticalClues.propTypes = {
  clues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  maxVerticalChunks: PropTypes.number.isRequired,
  maxHorizonalChunks: PropTypes.number.isRequired
}

function zipArray(array) {
  return array[0].map((_,c) => {
    return array.map(row => {
      return row[c];
    });
  });
}

export default NonogramPuzzle;