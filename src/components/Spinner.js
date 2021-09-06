import React, { Component } from "react";
import infinityLoader from "../InfinityLoader.gif";
import PropTypes from "prop-types";

export class Spinner extends Component {
  static defaultProps = {
    loadingType: "landing",
  };

  static propTypes = {
    loadingType: PropTypes.string,
  };

  getHeight = () => {
    if (this.props.loadingType === "landing") {
      return {
        height: "70vh",
      };
    }
    if (this.props.loadingType === "scroll") {
      return {
        height: "15vh",
      };
    }
  };

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={this.getHeight()}
      >
        <img
          src={infinityLoader}
          alt="infinityLoader"
          height={this.props.loadingType==="scroll"?"90px":"150px"}
          width={this.props.loadingType==="scroll"?"90px":"150px"}
        />
      </div>
    );
  }
}

export default Spinner;
