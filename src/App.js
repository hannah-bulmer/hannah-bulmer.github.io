import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import WebsiteLink from './components/WebsiteLink';
import ExperienceCard from './components/ExperienceCard';
import data from './data.json';

const links = [
  { link: 'https://www.linkedin.com/in/hannah-bulmer-099030154/', image: require('./static/linkedin.png') },
  { link: 'https://github.com/hannah-bulmer', image: require('./static/github.svg') },
  { link: 'https://drive.google.com/file/d/1Sk6aq4FoDJpWHWhIIdHPYcvIorGKTY0c/view', image: require('./static/resume.png') },
]

class App extends Component {
  renderLinks() {
    return (
      links.map(link => <WebsiteLink link={link.link} image={link.image} />)
    )
  }

  renderExperiences() {
    console.log(data);
    const { experience } = data;
    return (
      Object.keys(experience).map((exp) => <ExperienceCard location={experience[exp].name} dates={experience[exp].dates} logo="github" details={experience[exp].details} />
      )
    )
  }

  renderBirds() {
    return (
      <div className="parent">
        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>
        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="App" id="home">
          <div>
            <div className="title">Hannah Bulmer</div>
          <h4>Nature loving  🏕  Coffee enthusiast  ☕️  Developer 💻</h4>
            {this.renderBirds()}
          </div>
          <div className="vertical">
            {this.renderLinks()}
          </div>
        </div>
        <div className="navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
        </div>

        <div id="about">
          <div className="container">
            <div className="shadowBox"><img src={require('./static/hannah.jpg')} alt="Hannah" /></div>
            <div className="rightCol">
              <h3>Hi! I'm Hannah Bulmer.</h3>
              <h5>
                I'm a third year Computer Science student at the University of Waterloo.
              </h5>
            </div>
          </div>
        </div>

        <div id="experience">
          <h3>Experience - CURRENTLY WIP</h3>
          <div className="list">
            {this.renderExperiences()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
