import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import ArticlesIndex from "./containers/ArticlesIndex/ArticlesIndex";
import Article from "./containers/Article/Article";
// import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={ArticlesIndex} />
          <Route path="/article" component={Article} />
        </Layout>
      </Router>
    );
  }
}

export default App;
