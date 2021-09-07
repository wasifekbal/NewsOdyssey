import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
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
    this.props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${pageNo}&pageSize=${pageSize}`;
    this.props.changeProgress(20);
    let fatchedData = await fetch(url);
    this.props.changeProgress(50);
    let parsedData = await fatchedData.json();
    this.props.changeProgress(80);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.changeProgress(100);
  };

  async componentDidMount() {
    this.fetchNews(this.state.currentPage, this.props.pageSize);
  }

  fetchMoreData = () => {
    this.setState({currentPage: this.state.currentPage + 1});
    this.fetchNews(this.state.currentPage, this.props.pageSize);
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
            author={news.author}
            source={news.source.name}
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
          {this.state.loading ? <Spinner loadingType="landing" /> : null}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner loadingType="scroll" />}
              style={{ overflow: "inherit" }}
            >
          <div className="row mt-3">
              {this.state.articles.map(this.showNews)}
          </div>
            </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
