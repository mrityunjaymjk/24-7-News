import React, { Component } from "react";

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      newsUrl: "",
      page: 0,
    };
  }

  componentDidMount() {
    this.handleArticles();
  }

  handleArticles() {
    let { articles } = this.props;
    let { page } = this.state;
    this.setState({
      title: articles[page]?.title ? articles[page]?.title.slice(0, 45) : " ",
      description: articles[page]?.description
        ? articles[page]?.description.slice(0, 45)
        : " ",
      imageUrl: articles[page]?.urlToImage,
      newsUrl: articles[page]?.url,
    });
  }

  render() {
    let { title, description, imageUrl } = this.state;

    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              onClick={() => {
                this.setState({ page: 0 }, () => {
                  this.handleArticles();
                });
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              onClick={() => {
                this.setState({ page: 1 }, () => {
                  this.handleArticles();
                });
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              onClick={() => {
                this.setState({ page: 2 }, () => {
                  this.handleArticles();
                });
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={
                  imageUrl
                    ? imageUrl
                    : "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/05/7302b750-d95c-41eb-847b-9141e0ed5204/thumbnail/1200x630/45b9b1c4aa9f60ebd7fec0d6df17d8cd/gettyimages-1657389394.jpg?v=170b469460f9b5b4a2670b02bb591e2d"
                }
                className="d-block w-100"
                alt="img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{title}....</h5>
                <p>{description}...</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src={
                  imageUrl
                    ? imageUrl
                    : "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/05/7302b750-d95c-41eb-847b-9141e0ed5204/thumbnail/1200x630/45b9b1c4aa9f60ebd7fec0d6df17d8cd/gettyimages-1657389394.jpg?v=170b469460f9b5b4a2670b02bb591e2d"
                }
                className="d-block w-100"
                alt="img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{title}...</h5>
                <p>{description}...</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src={
                  imageUrl
                    ? imageUrl
                    : "https://assets2.cbsnewsstatic.com/hub/i/r/2023/12/05/7302b750-d95c-41eb-847b-9141e0ed5204/thumbnail/1200x630/45b9b1c4aa9f60ebd7fec0d6df17d8cd/gettyimages-1657389394.jpg?v=170b469460f9b5b4a2670b02bb591e2d"
                }
                className="d-block w-100"
                alt="img"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{title}...</h5>
                <p>{description}...</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            onClick={() => {
              this.setState(
                { page: this.state.page === 0 ? 2 : this.state.page - 1 },
                () => {
                  this.handleArticles();
                }
              );
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            onClick={() => {
              this.setState(
                { page: this.state.page === 2 ? 0 : this.state.page + 1 },
                () => {
                  this.handleArticles();
                }
              );
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Slide;
