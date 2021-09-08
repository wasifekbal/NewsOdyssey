import React from "react";
import defaultNewsImage from "../defaultNewsImage.jpg";

function NewsItems (props) {

    let { title, desc, imgLink, newsLink, publishedAt, author, source } = props;

    let timeConvert = (timee) => {
      timee = timee.split(":");
      let hr = parseInt(timee[0]);
      let amPm = hr > 12 ? " PM" : " AM";
      hr = hr % 12;
      if (hr === 0) {
        timee[0] = "12";
      } else {
        timee[0] = hr.toString().padStart(2, 0);
      }
      return timee.slice(0, 2).join(":") + amPm;
    };

    let datetime = new Date(publishedAt);
    let dayDate = datetime.toDateString();
    let time = datetime.toLocaleTimeString();

    return (
      <div className="card border border-mute" style={{ width: "20rem" }}>
        <img
          src={imgLink ? imgLink : defaultNewsImage}
          className="card-img-top hover-zoom"
          alt="altText"
          height="180px"
          width="120px"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 45) : ""}....</h5>
          <p className="card-text">{desc ? desc.slice(0, 94) : ""}...</p>
          <p className="card-text">
            <small className="text-muted">
              Published{author ? " By " + author.slice(0,23)+ "..." : " By unknown"}
            </small>
            <br />
            <small className="text-muted">
              {publishedAt ? `${dayDate} at ${timeConvert(time)}` : ""}
            </small>
            <br />
            <span className="badge bg-danger text-light">Source: {source}</span>
          </p>
          <a
            href={newsLink ? newsLink : ""}
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

export default NewsItems;
