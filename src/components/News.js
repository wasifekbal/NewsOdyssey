import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let fetchNews = async (pageNo, pageSize) => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${pageNo}&pageSize=${pageSize}`;
    props.setProgress(20);
    let fatchedData = await fetch(url);
    props.setProgress(50);
    let parsedData = await fatchedData.json();
    props.setProgress(80);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchNews(currentPage, props.pageSize);
    // eslint-disable-next-line
  }, []);

  let fetchMoreData = () => {
    fetchNews(currentPage + 1, props.pageSize);
    setCurrentPage(currentPage + 1);
  };

  function showNews(news) {
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

  return (
    <>
      <div className="container" style={{marginTop: "4.375rem"}}>
        <h2 className="text-center mt-2">
          {`NewsMonkey - TOP ${props.category} headlines`}
        </h2>
        {loading ? <Spinner loadingType="landing" /> : null}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner loadingType="scroll" />}
          style={{ overflow: "inherit" }}
        >
          <div className="row mt-3">{articles.map(showNews)}</div>
        </InfiniteScroll>
      </div>
    </>
  );
}

News.defaultProps = {
  pageSize: 9,
  category: "general",
  country: "in",
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  country: PropTypes.string,
};

export default News;
