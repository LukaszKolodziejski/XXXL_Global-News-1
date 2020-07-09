import React, { Component, Fragment } from "react";

import Filters from "../../components/Navigation/Filters/Filters";
import Articles from "../../components/Articles/Articles";
class ArticleIndex extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Articles</h1>
        <Filters />
        <Articles />
      </Fragment>
    );
  }
}

export default ArticleIndex;
