import React, { Component, Fragment } from "react";

import Filters from "../../components/Navigation/Filters/Filters";
class ArticleIndex extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>Articles</h1>
        <Filters />
        <div>ArticleIndex</div>
      </Fragment>
    );
  }
}

export default ArticleIndex;
