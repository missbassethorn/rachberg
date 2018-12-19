import React from 'react';
import PropTypes from 'prop-types';
import NonogramRowCells from './NonogramRowCells';
import * as Helpers from './helpers';

class NonogramPuzzle extends React.Component {
  render() {
    const maxHorizontalClueChunks = Math.max(...this.props.horizontalClues.map(clue => clue.length));
    const maxVerticalClueChunks = Math.max(...this.props.verticalClues.map(clue => clue.length));

    // TODO: change this to render from user soution instead of debug solution
    const fillings = Helpers.buildSolutionRows(this.props.debug, this.props.width, this.props.height);

    const rows = this.props.horizontalClues.map((rowClue, i) => {
      return (
        <tr key={`row-${i}`}>
          <HorizontalClue
            clues={rowClue}
            maxChunks={maxHorizontalClueChunks}
            row={i} />
          <NonogramRowCells cells={fillings[i]} rowNumber={i} />
        </tr>
      );
    });

    return (
      <table className="nonogram playable">
        <tbody>
          <VerticalClues
            clues={this.props.verticalClues}
            maxVerticalChunks={maxVerticalClueChunks}
            leftPadding={maxHorizontalClueChunks} />
          {rows}
        </tbody>
      </table>
    );
  }
}

NonogramPuzzle.propTypes = {
  horizontalClues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  verticalClues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  debug: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

class HorizontalClue extends React.Component {
  render() {
    const paddingNeeded = this.props.maxChunks - this.props.clues.length;
    let padding = [];
    for (let i = 0; i < paddingNeeded; i++) {
      padding.push(<th key={`pad-col${i}-row${this.props.row}`} className='horizontal-clue'></th>);
    }

    const chunks = this.props.clues.map((chunk, i) => {
      return (
        <th key={`clue-col${i}-row${this.props.row}`} className={`color-${chunk.color} horizontal-clue`}>
          <div>{chunk.length}</div>
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
    const clues = Helpers.rotateArrayWithLeftPad(this.props.clues);
    const rows = [];
    
    for (let rowIndex = 0; rowIndex < this.props.maxVerticalChunks; rowIndex++) {
      const cornerPadding = [];
      for (let i = 0; i < this.props.leftPadding; i++) {
        cornerPadding.push(<th key={`corner-pad-row${rowIndex}-col${i}`} className='vertical-clue horizontal-clue'></th>);
      }
      
      const rowClues = clues[rowIndex].map((chunk, i) => {
        if (chunk) {
          return (
            <th key={`clue-col${i}-row${rowIndex}`} className={`color-${chunk.color} vertical-clue`}>
              <div>{chunk.length}</div>
            </th>
          );
        } else {
          return <th key={`pad-col${i}-row${rowIndex}`} className='vertical-clue'></th>
        }
      });
      
      rows.push(
        <tr key={`vert-clues-row-${rowIndex}`}>
          {cornerPadding}
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
  leftPadding: PropTypes.number.isRequired
}

export default NonogramPuzzle;