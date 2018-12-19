import React from 'react';
import PropTypes from 'prop-types';
import NonogramRowCells from './NonogramRowCells';
import * as Helpers from './helpers';

class NonogramDisplay extends React.Component {
  render() {
    const solutionRows = Helpers.buildSolutionRows(this.props.solution, this.props.width, this.props.height);
    const rows = solutionRows.map((row, i) => {
      return (
        <tr key={`display-row${i}`}>
          <NonogramRowCells cells={row} rowNumber={i} />
        </tr>
      );
    });

    return (
      <table className="nonogram display-only">
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

NonogramDisplay.propTypes = {
  solution: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default NonogramDisplay;