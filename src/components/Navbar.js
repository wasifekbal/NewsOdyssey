import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand fs-4" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/"
                  >
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/business"
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/entertainment"
                  >
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/health"
                  >
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/science"
                  >
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/technology"
                  >
                    technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-capitalize"
                    style={{ fontWeight: "600" }}
                   to="/sports"
                  >
                    sports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
