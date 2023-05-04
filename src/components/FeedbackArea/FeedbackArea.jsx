import React, { Component } from 'react';

export class FeedbackArea extends Component {
  render() {
    return (
      <div className="feedbackArea">
        <h2 className="title">Please leave feedback</h2>
        <div className="control">
          <button
            type="button"
            className="btn"
            onClick={() => {
              console.log('Done');
            }}
          >
            Good
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              console.log('Done');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              console.log('Done');
            }}
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}
