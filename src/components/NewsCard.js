// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Cards from "./Cards";
import Slide from "./Slide";

export default class NewsCard extends Component {
  //   static propTypes = {second: third}
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: [],
      topArticles: [],
      loading: false,
      page: 1,
      totalPage: null,
    };
  }
  componentDidMount() {
    this.handleData();
  }
  handleData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2ccc7ecff1547fb85df0f3b5edbd21d&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      totalPage: Math.ceil(parseData.totalResults / 20),
      articles: parseData.articles,
      topArticles: parseData.articles.slice(0, 3),
    });
    console.log(parseData);
  };
  handleprevClick = () => {
    // console.log("prev")
    this.setState(
      {
        page: this.state.page - 1,
      },
      () => {
        this.handleData();
      }
    );
  };
  handlenextClick = () => {
    // console.log("next")
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.handleData();
      }
    );
  };

  render() {
    return (
      <div className="my-3">
        <h1 className="my-5 text-center">24/7 Top Headlines</h1>
        <div className="">
          <div className="">
            {this.state.topArticles.length > 0 && (
              <Slide articles={this.state.topArticles} />
            )}
          </div>
        </div>
        <div className="row p-5">
          {this.state.articles.map((element) => (
            <div className="col mb-3" key={element.url}>
              <Cards
                title={element.title ? element.title.slice(0, 45) : " "}
                description={
                  element.description ? element.description.slice(0, 45) : " "
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            className="btn btn-dark mx-3"
            onClick={this.handleprevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page === this.state.totalPage}
            type="button"
            className="btn btn-dark mx-3"
            onClick={this.handlenextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}
