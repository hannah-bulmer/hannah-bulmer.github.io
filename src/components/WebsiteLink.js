import React from 'react';

class WebsiteLink extends React.Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" className="link">
        <img src={this.props.image} alt={this.props.link} width="20" height="20"/>
      </a>
    )
  }
}

export default WebsiteLink;
