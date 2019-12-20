import React from 'react';

class ExperienceCard extends React.Component {
  render() {
    const { logo, location, details } = this.props;
    return(
      <div className="box">
        <img src={require(`../static/${logo}.svg`)} alt="company logo" />
        <div className="location">
          {location}
        </div>
        <div className="details">
          {details}
        </div>
      </div>
    )
  }
}

export default ExperienceCard;
