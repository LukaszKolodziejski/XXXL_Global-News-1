import * as actionTypes from "./actionTypes";

export const showFullArticleStart = () => ({
  type: actionTypes.SHOW_FULLARTICLE_START,
});

export const showFullArticleSuccess = (data) => ({
  type: actionTypes.SHOW_FULLARTICLE_SUCCESS,
  data,
});

export const showFullArticleFail = (error) => ({
  type: actionTypes.SHOW_FULLARTICLE_FAIL,
  error,
});

// Redux-Thunk
export const showFullArticle = (data) => (dispatch) => {
  dispatch(showFullArticleStart());
  data
    ? dispatch(showFullArticleSuccess(data))
    : dispatch(showFullArticleFail("no data"));
};
