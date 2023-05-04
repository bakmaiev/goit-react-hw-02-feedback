import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics">
          <Statistics options={Object.keys(this.state)} />
        </Section>
      </>
    );
  }
}
