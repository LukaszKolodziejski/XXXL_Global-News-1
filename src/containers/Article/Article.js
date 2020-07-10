import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import SingleArticle from "../../components/Articles/SingleArticle/SingleArticle";
import Title from "../../components/Title/Title";

class Article extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Title name="Article Title" />
        <Link to="/" className="returnIndex">
          Return to articles list
        </Link>
        <SingleArticle />
      </Fragment>
    );
  }
}

export default Article;
