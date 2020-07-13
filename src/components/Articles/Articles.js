import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import SingleArticle from "./SingleArticle/SingleArticle";
import Button from "../../components/UI/Button/Button";
import styles from "./css/Articles.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
class Articles extends Component {
  state = {
    countArticles: 6,
  };

  componentDidMount = () => this.props.onFetchArticles();

  loadMoreButtonHandler = () =>
    this.setState((prevState) => ({
      countArticles: prevState.countArticles + 6,
    }));

  render() {
    const { countArticles } = this.state;
    const { loading, articles } = this.props;
    let allArticles = [];
    let loadMoreButton;

    if (!loading) {
      for (let key in articles[2]) {
        key !== "id" &&
          key < countArticles &&
          allArticles.push(<SingleArticle key={key} data={articles[2][key]} />);
      }
      loadMoreButton = (
        <Button btnType="LoadMoreButton" clicked={this.loadMoreButtonHandler}>
          Show More
        </Button>
      );
    } else loadMoreButton = <Spinner />;

    return (
      <main className={styles.Articles}>
        <div className={styles.Articles__Content}>{allArticles}</div>
        <div className={styles.Articles__Button}>{loadMoreButton}</div>
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
