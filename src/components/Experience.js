import React from 'react';

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 60,
    }
  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
      </div>)
  }
}

export default DataDisplay;