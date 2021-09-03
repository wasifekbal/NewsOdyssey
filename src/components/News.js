import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      currentPage: 1,
    };
  }

  fetchNews = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&page=${pageNo}&pageSize=20`;
    let fatchedData = await fetch(url);
    let parsedData = await fatchedData.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  };

  async componentDidMount() {
    this.fetchNews(this.state.currentPage);
  }

  goToPrevPage = async () => {
    this.fetchNews(this.state.currentPage - 1);
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goToNextPage = async () => {
    this.fetchNews(this.state.currentPage + 1);
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  showNews(news) {
    return (
      <div className="col-md-4 mt-3" key={news.url}>
        <div className="d-flex justify-content-center align-item-center">
          <NewsItems
            title={news.title}
            desc={news.description}
            imgLink={news.urlToImage}
            newsLink={news.url}
            publishedAt={news.publishedAt}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="container mt-3">
          <h2 className="text-center mt-2" style={{ width: "100%" }}>
            NewsMonkey - TOP headlines
          </h2>
          <div className="row mt-3">
            {this.state.articles.map(this.showNews)}
          </div>
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.currentPage <= 1 ? true : false}
            className="btn btn-primary"
            onClick={this.goToPrevPage}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.currentPage + 1 >
              Math.ceil(this.state.totalResults / 20)
                ? true
                : false
            }
            className="btn btn-primary"
            onClick={this.goToNextPage}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
