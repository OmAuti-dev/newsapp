import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fbbab4f7718e48788ae0f0353107030c&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
static defaultProps = {

}

  constructor() {
    super();
    console.log("this is constructor from news compo");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  handleNextPage = async () => {
    this.setState({loading:true})
    console.log("Next page");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fbbab4f7718e48788ae0f0353107030c&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePreviousPage = async () => {
    console.log("Previous page");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fbbab4f7718e48788ae0f0353107030c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: false });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-3xl text-center font-bold mt-7 ">
          NewsWizz - Top Headlines
        </h1>
        {this.state.loading && <Spinner className="flex justify-center items-center" />}
        <div className="grid grid-cols-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="container mx-auto mt-5" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container">
          <div className="flex justify-between">
            {!this.state.loading && <button
              hidden={this.state.page <= 1 }
              onClick={this.handlePreviousPage}
              className="bg-gray-900 hover:bg-black text-gray-100 font-bold py-2 px-4 rounded-md mb-1"
            >
              &larr; Prev
            </button>}
            {!this.state.loading && <button
              hidden={
                 
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize ) 
              }
              onClick={this.handleNextPage}
              className="bg-gray-900 hover:bg-black text-gray-100 font-bold py-2 px-4 rounded-md mb-1"
            >
              Next &rarr;
            </button>}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
