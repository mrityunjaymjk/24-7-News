// import PropTypes from "prop-types";
import React, { Component } from "react";

export class Cards extends Component {
  //   static propTypes = {second: third}

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            style={{ height: "25vh" }}
            src={
              imageUrl
                ? imageUrl
                : "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/05/7302b750-d95c-41eb-847b-9141e0ed5204/thumbnail/1200x630/45b9b1c4aa9f60ebd7fec0d6df17d8cd/gettyimages-1657389394.jpg?v=170b469460f9b5b4a2670b02bb591e2d"
            }
            className="card-img-top"
            alt="Img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
