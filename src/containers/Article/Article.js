import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import SingleArticle from "../../components/Articles/SingleArticle/SingleArticle";
import Title from "../../components/Title/Title";
import ReturnButton from "../../components/Navigation/ReturnButton/ReturnButton";
class Article extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Title name="Article Title" />
        <ReturnButton>Return to articles list</ReturnButton>
        <SingleArticle />
      </Fragment>
    );
  }
}

export default Article;
