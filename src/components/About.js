import React from "react";
import Picture from "./Picture"

import me from "../static/me.jpg"

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col">
            <Picture image={me} />
          </div>
          <div class="col-lg-5 pr-5 pb-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              About here
            </p>
            <p>
              About part 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;