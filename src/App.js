import React, { Component } from 'react';
import '../node_modules/react-linechart/dist/styles.css';
import './App.scss';
import './birds.scss';
import 'bootstrap/dist/css/bootstrap.css';
import WebsiteLink from './components/WebsiteLink';

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
          <h4>Nature lover • Coffee enthusiast • Student at UW</h4>
            {this.renderBirds()}
          </div>
          <div className="vertical">
            {this.renderLinks()}
          </div>
        </div>
        <div className="navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
        </div>

        <div id="about">
            Hello this is the about me section
        </div>
      </div>
    );
  }
}

export default App;
