import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  let history = useHistory();

  const notMode = (mode) => {
    if (mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  };

  const changeMode = () => {
    props.changeMode(notMode(props.mode));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      props.handleSearchQuery(searchQuery);
      history.push("/search");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    let navbar = document.getElementById("navbarSupportedContent");
    let navLinks = document.getElementsByClassName("nav-link");
    for (const link of navLinks) {
      link.addEventListener("click", () => {
        navbar.classList.remove("show");
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top border-bottom`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/">
            NewsOdyssey
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/"
                >
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/business"
                >
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/entertainment"
                >
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/health"
                >
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/science"
                >
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/technology"
                >
                  technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-capitalize text-${
                    props.mode === "light" ? "mute" : "light"
                  }`}
                  style={{ fontWeight: "600" }}
                  to="/sports"
                >
                  sports
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className={`form-control me-2 bg-${props.mode} text-${notMode(
                  props.mode
                )}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchbox"
                value={searchQuery}
                onChange={handleChange}
              />
              <button
                className={`btn btn-outline-${
                  props.mode === "light" ? "success" : "warning"
                }`}
                type="submit"
              >
                Search
              </button>
            </form>
            <div className="form-check form-switch ms-sm-0 ms-lg-3 my-3 my-lg-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={changeMode}
              />
              <label
                className={`form-check-label text-${notMode(
                  props.mode
                )} text-capitalize`}
                htmlFor="flexSwitchCheckChecked"
              >
                {notMode(props.mode)} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
