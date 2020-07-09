import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import SingleArticle from "../../components/Articles/SingleArticle/SingleArticle";

class Article extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Article Title </h1>
        <Link to="/" className="returnIndex">
          Return to articles list
        </Link>
        <SingleArticle />
      </Fragment>
    );
  }
}

export default Article;
