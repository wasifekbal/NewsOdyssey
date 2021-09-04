import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

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

  static defaultProps = {
    pageSize: 9,
    category: "general",
    country: "in",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };

  fetchNews = async (pageNo, pageSize) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${pageNo}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let fatchedData = await fetch(url);
    let parsedData = await fatchedData.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.fetchNews(this.state.currentPage, this.props.pageSize);
  }

  goToPrevPage = async () => {
    if (this.state.currentPage > 1) {
      this.fetchNews(this.state.currentPage - 1, this.props.pageSize);
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
    document.documentElement.scrollTop = 0;
  };

  goToNextPage = async () => {
    if (
      this.state.currentPage + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.fetchNews(this.state.currentPage + 1, this.props.pageSize);
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
    document.documentElement.scrollTop = 0;
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
          <h2 className="text-center mt-2">
            {`NewsMonkey - TOP ${this.props.category} headlines`}
          </h2>
          {this.state.loading ? <Spinner /> : null}
          <div className="row mt-3">
            {this.state.loading ? null : this.state.articles.map(this.showNews)}
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
              Math.ceil(this.state.totalResults / this.props.pageSize)
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
// cerdatokne@biyac.com
