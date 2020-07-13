import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import FullSingleArticle from "../../components/Articles/FullSingleArticle/FullSingleArticle";
import ReturnButton from "../../components/Navigation/ReturnButton/ReturnButton";
import Title from "../../components/Title/Title";
class Article extends Component {
  state = {};

  render() {
    const { articles, articleID } = this.props;
    let fullArticleContent;
    for (let key in articles[2]) {
      key == articleID && (fullArticleContent = articles[2][key]);
    }
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //TODO: DELETE THIS
    fullArticleContent = {
      source: {
        id: null,
        name: "Lifehacker.com",
      },
      author: "Elizabeth Yuko",
      title: "How to Read a Trail Map",
      description:
        "Going on walks and hikes in uncrowded parks is one of the few activities that we can still do without having to worry too much about spreading COVID-19 (assuming that you’re either by yourself, with the people you’ve been quarantining with, or with other peop…",
      url: "https://lifehacker.com/how-to-read-a-trail-map-1844344804",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/xynvcf94yciusntl6uly.jpg",
      publishedAt: "2020-07-11T14:00:00Z",
      content:
        "Going on walks and hikes in uncrowded parks is one of the few activities that we can still do without having to worry too much about spreading COVID-19 (assuming that youre either by yourself, with t… [+3605 chars]",
    };
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    return (
      <Fragment>
        <Title name={fullArticleContent.title} />
        <ReturnButton>Return to articles list</ReturnButton>
        <FullSingleArticle data={fullArticleContent} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articlesIndex.articles,
  articleID: state.article.articleID,
});

export default connect(mapStateToProps)(Article);
