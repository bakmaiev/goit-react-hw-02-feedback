import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        <h2 className="title">Statistics</h2>
        <ul className="list">
          <li className="item">Good: </li>
          <li className="item">Neutral: </li>
          <li className="item">Bad: </li>
        </ul>
      </div>
    );
  }
}
