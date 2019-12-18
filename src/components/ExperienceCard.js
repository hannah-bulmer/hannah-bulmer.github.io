import React from 'react';

class ExperienceCard extends React.Component {
  render() {
    return(
      <div className="box">
        <img src={require('../static/campfire.gif')} alt="company logo" />
        <div className="location">
          University
        </div>
        <div className="details">
          Explanation
        </div>
      </div>
    )
  }
}

export default ExperienceCard;
