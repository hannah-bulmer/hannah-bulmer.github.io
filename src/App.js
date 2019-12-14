import React, { Component } from 'react';
import ParticleComponent from "./ParticleComponent";
import '../node_modules/react-linechart/dist/styles.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import WebsiteLink from './components/WebsiteLink';

const links = [
  { link: 'https://www.linkedin.com/in/hannah-bulmer-099030154/', image: require('./static/linkedin.png')},
  { link: 'https://github.com/hannah-bulmer', image: require('./static/github.svg')},
  { link: 'https://drive.google.com/file/d/1Sk6aq4FoDJpWHWhIIdHPYcvIorGKTY0c/view', image: require('./static/resume.png')},
]

class App extends Component {
  renderLinks() {
    return (
      links.map(link => <WebsiteLink link={link.link} image={link.image} />)
    )
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="particles-background">
          <div className="title">Hannah Bulmer</div>
          <h4>Aspiring computer scientist • Coffee enthusiast</h4>
          {this.renderLinks()}
          <ParticleComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
