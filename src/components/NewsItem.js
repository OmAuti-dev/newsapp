import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className=" w-auto"
            src={!imageUrl?"https://www.emojirequest.com/images/NOEmoji.jpg":imageUrl}
            alt="..."
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl pb-1">{title}</div>
            <p className="text-gray-700 text-base pb-1">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" >
            <button  className=" hover:bg-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow bg-gray-800">
              Read More
            </button>
            </a>
           
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
