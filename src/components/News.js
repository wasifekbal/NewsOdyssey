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

  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${props.pageSize}`;

  let searchUrl = `https://newsapi.org/v2/everything?q=${props.searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}&language=en&pageSize=${props.pageSize}`;
  
  if(props.searchQuery){
    url = searchUrl;
  }

  let fetchNews = async (apiUrl, pageNo) => {
    apiUrl += `&page=${pageNo}`;
    props.setProgress(20);
    let fatchedData = await fetch(apiUrl);
    props.setProgress(50);
    let parsedData = await fatchedData.json();
    props.setProgress(80);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchNews(url, currentPage);
    // eslint-disable-next-line
  }, []);

  let fetchMoreData = () => {
    fetchNews(url, currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  function showNews(news) {
    return (
      <div className="col col-lg-4 mt-3" key={news.url}>
        <div className="d-flex justify-content-center align-item-center">
          <NewsItems
            title={news.title}
            desc={news.description}
            imgLink={news.urlToImage}
            newsLink={news.url}
            publishedAt={news.publishedAt}
            author={news.author}
            source={news.source.name}
            mode={props.mode}
          />
        </div>
      </div>
    );
  }

  const getHeadlineTitle = () => {
    if(props.searchQuery){
      return `NewsOdyssey - Search results for ${props.searchQuery}`
    }
    else{
      return `NewsOdyssey - TOP ${props.category} headlines`
    }
  }

  return (
    <>
      <div className="container" style={{marginTop: "4.375rem"}}>
        <h2 className={`text-center mt-2 ${props.mode==="light"?"text-dark":"text-light"}`}>
          {getHeadlineTitle()}
        </h2>
        {loading ? <Spinner loadingType="landing" /> : null}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner loadingType="scroll" />}
          style={{ overflow: "inherit" }}
        >
          <div className="row mt-2">{articles.map(showNews)}</div>
        </InfiniteScroll>
      </div>
    </>
  );
}

News.defaultProps = {
  searchQuery: "",
  mode: "light",
  setProgress: null,
  category: "general",
  country: "in",
  pageSize: 9,

};

News.propTypes = {
  searchQuery: PropTypes.string,
  mode: PropTypes.string,
  setProgress: PropTypes.func,
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
