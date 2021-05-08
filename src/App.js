import React from "react";
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Internships, Home, About, Contact, Footer, Projects } from "./components"
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/internships" exact component={() => <Internships />} />
            <Route path="/projects" exact component={() => <Projects />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;