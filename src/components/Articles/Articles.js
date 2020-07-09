import React, { Component, Fragment } from "react";
import SingleArticle from "./SingleArticle/SingleArticle";

class Articles extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <button className="loadMoreButton">Show More</button>
      </Fragment>
    );
  }
}

export default Articles;
