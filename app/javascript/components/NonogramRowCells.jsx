import React from 'react';
import PropTypes from 'prop-types';

class NonogramRowCells extends React.Component {
  render() {
    const rowCells = this.props.cells.map((cell, i) => {
      return (
      <td
        className={`color-${cell}`}
        key={`display-cell-col${i}-row${this.props.rowNumber}`}
        data-row={this.props.rowNumber}
        data-col={i} />
      );
    });
    return rowCells;
  }
}

NonogramRowCells.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string),
  rowNumber: PropTypes.number
}

export default NonogramRowCells;