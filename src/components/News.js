import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  async componentDidMount() {
    this.updateNews();
  }
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("this is constructor from news compo");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbbab4f7718e48788ae0f0353107030c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreviousPage = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-3xl text-center font-bold mt-7 ">
          NewsWizz - Top Headlines
        </h1>

        {this.state.loading && (
          <div className="flex justify-center items-center h-screen">
            {" "}
            <Spinner className=" flex justify-center items-center h-screen " />
          </div>
        )}
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 gap-16 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="container mx-auto mt-5" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between">
            {!this.state.loading && (
              <button
                hidden={this.state.page <= 1}
                onClick={this.handlePreviousPage}
                className="bg-gray-900 hover:bg-black text-gray-100 font-bold py-2 px-4 rounded-md mb-1"
              >
                &larr; Prev
              </button>
            )}
            {!this.state.loading && (
              <button
                hidden={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.handleNextPage}
                className="bg-gray-900 hover:bg-black text-gray-100 font-bold py-2 px-4 rounded-md mb-1"
              >
                Next &rarr;
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
