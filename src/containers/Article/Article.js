import React, { Component, Fragment } from "react";

import FullSingleArticle from "../../components/Articles/FullSingleArticle/FullSingleArticle";
import ReturnButton from "../../components/Navigation/ReturnButton/ReturnButton";
import Title from "../../components/Title/Title";
class Article extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Title name="Article Title" />
        <ReturnButton>Return to articles list</ReturnButton>
        <FullSingleArticle />
      </Fragment>
    );
  }
}

export default Article;
