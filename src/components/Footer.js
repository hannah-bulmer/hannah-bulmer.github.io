import React from "react";
import { Link, withRouter } from "react-router-dom";

function Footer(props) {
    const { pathname } = props.location

    const getPageLink = (pageName, url) => (
        <li
            class={`nav-item  ${
                pathname === url ? "active" : ""
            }`}
            >
            <Link class="nav-link" to={url}>
                {pageName}
            </Link>
        </li>
    )

    return (
    <div className="footer">
        <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
        <div class="container">
            <Link class="navbar-brand" to="/">
            Hannah Bulmer
            </Link>
            <div>
            <ul class="navbar-nav ml-auto">
                {getPageLink("Home", "/")}
                {getPageLink("About", "/about")}
                {getPageLink("Internships", "/internships")}
                {getPageLink("Other Projects", "/projects")}
                {getPageLink("Contact", "/contact")}
            </ul>
            </div>
        </div>
        </nav>
    </div>
    );
}

export default withRouter(Footer);