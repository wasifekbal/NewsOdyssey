import React, { Component } from "react";
import infinityLoader from "../InfinityLoader.gif";

export class Spinner extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <img
          src={infinityLoader}
          alt="infinityLoader"
          height="150px"
          width="150px"
        />
      </div>
    );
  }
}

export default Spinner;
