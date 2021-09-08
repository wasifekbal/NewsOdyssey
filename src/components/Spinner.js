import React from "react";
import infinityLoader from "../InfinityLoader.gif";
import PropTypes from "prop-types";

const Spinner = (props) => {
  const getHeight = () => {
    if (props.loadingType === "landing") {
      return {
        height: "70vh",
      };
    }
    if (props.loadingType === "scroll") {
      return {
        height: "15vh",
      };
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={getHeight()}
    >
      <img
        src={infinityLoader}
        alt="infinityLoader"
        height={props.loadingType === "scroll" ? "90px" : "150px"}
        width={props.loadingType === "scroll" ? "90px" : "150px"}
      />
    </div>
  );
};

Spinner.defaultProps = {
  loadingType: "landing",
};

Spinner.propTypes = {
  loadingType: PropTypes.string,
};

export default Spinner;
