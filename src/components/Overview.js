import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
}

export default Overview;
