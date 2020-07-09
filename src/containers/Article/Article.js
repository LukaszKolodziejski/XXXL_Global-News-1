import React, { Component, Fragment } from "react";

import SingleArticle from "../../components/Articles/SingleArticle/SingleArticle";

class Article extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Article Title</h1>
        <button className="returnIndex">Return to articles list</button>
        <SingleArticle />
      </Fragment>
    );
  }
}

export default Article;
