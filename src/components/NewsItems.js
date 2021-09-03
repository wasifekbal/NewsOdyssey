import React, { Component } from "react";
import defaultNewsImage from "../defaultNewsImage.jpg"

export class NewsItems extends Component {
    render() {
        
        let {title,desc,imgLink,newsLink} = this.props;

    return (
      <div className="card border border-mute" style={{ width: "20rem" }}>
        <img src={imgLink?imgLink:defaultNewsImage} className="card-img-top hover-zoom" alt="altText" 
        height="180px" width="120px"
        />
        <div className="card-body">
          <h5 className="card-title">{title?title.slice(0, 45):""}....</h5>
          <p className="card-text">
            {desc?desc.slice(0,94):""}...
          </p>
          <a href={newsLink?newsLink:""} 
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
          >
            Know more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
