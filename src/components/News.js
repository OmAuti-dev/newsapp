import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
   
     

    setLoading(true);
    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      props.setProgress(50);
      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } else {
        console.error("Failed to fetch articles");
        setArticles([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
      setTotalResults(0);
    }
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(nextPage);

    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      if (parsedData.articles) {
        setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
      } else {
        console.error("Failed to fetch more articles");
      }
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold mt-7">
        NewsWizz - Top Headlines
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <Spinner className="flex justify-center items-center h-screen" />
        </div>
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          <div className="flex justify-center items-center">
            <Spinner className="flex justify-center items-center" />
          </div>
        }
      >
        <div className="container">
          <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-2 gap-16 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
              {!loading &&
                articles.map((element) => (
                  <div className="container mx-auto mt-5" key={element.url}>
                    <NewsItem
                      title={element.title || ""}
                      description={element.description || ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  setProgress: PropTypes.func.isRequired,
};

export default News;
