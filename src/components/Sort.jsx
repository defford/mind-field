import React from 'react'

const Sort = ({ onSort, isSorted, onAscending, isAscending }) => {
    return (
      <div className="sortButtons">
        <p>Sort Mode:</p>
        <button onClick={onSort}>
          {isSorted ? '!' : '🕐'}
        </button>
        <button onClick={onAscending}>
          {isAscending ? '▲' : '▼'}
        </button>
      </div>
    );
  };
  
  export default Sort;