import React from "react";
import './components.scss'
import { TapeTop, TapeBottom } from "./Pictures.styles"

function Picture(props) {
  return (
    <div class="pt-5 mr-10 text-center">
        <TapeTop />
        <TapeBottom />
        <img
            class="img-fluid rounded pr-lg-10 mb-md-0 img-thumbnail tilt5"
            src={props.image}
            alt=""
            width={250}
        />
    </div>
  );
}

export default Picture;
