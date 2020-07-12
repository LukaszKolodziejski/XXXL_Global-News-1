import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import articleReducer from "./store/reducers/article";
import articlesIndexReducer from "./store/reducers/articlesIndex";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = {
  article: articleReducer,
  articlesIndex: articlesIndexReducer,
};

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
