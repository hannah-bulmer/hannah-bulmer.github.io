import React from "react";
import { Link, withRouter } from "react-router-dom";
import { RightArrow, LeftArrow }  from "./Navigation.styles"

const links = {
  "/": "/about",
  "/about": "/internships",
  "/internships": "/projects",
  "/projects": "/contact",
  "/contact": "/",
}

function Navigation(props) {
  const curPath = props.location.pathname

  const getRightArrow = () => {
    return (
      <Link to={links[curPath]}>
        <RightArrow />
      </Link>
    )
  }

  const getLeftArrow = () => {
    if (curPath === "/") return
    const left = Object.keys(links).find(key => links[key] === curPath)
    return (
      <Link to={left}>
        <LeftArrow />
      </Link>
    )
  }

  return (
    <div>
      {getRightArrow()} 
      {getLeftArrow()}
    </div>
  )
}

export default withRouter(Navigation);