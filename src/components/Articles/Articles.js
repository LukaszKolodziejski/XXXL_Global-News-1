import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import SingleArticle from "./SingleArticle/SingleArticle";
import Button from "../../components/UI/Button/Button";
import styles from "./css/Articles.module.css";
class Articles extends Component {
  state = {};

  componentDidMount = () => this.props.onFetchArticles();

  render() {
    return (
      <main className={styles.Articles}>
        <div className={styles.Articles__Content}>
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
          <SingleArticle />
        </div>
        <div className={styles.Articles__Button}>
          <Button btnType="LoadMoreButton">Show More</Button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articlesIndex.articles,
  loading: state.articlesIndex.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticles: () => dispatch(actions.fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
