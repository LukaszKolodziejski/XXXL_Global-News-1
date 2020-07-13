import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  data: {},
};

const showFullArticleStart = (state, action) => ({
  ...state,
  loading: true,
});

const showFullArticleSuccess = (state, action) => ({
  ...state,
  loading: false,
  data: action.data,
});

const showFullArticleFail = (state, action) => ({
  ...state,
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_FULLARTICLE_START:
      return showFullArticleStart(state, action);
    case actionTypes.SHOW_FULLARTICLE_SUCCESS:
      return showFullArticleSuccess(state, action);
    case actionTypes.SHOW_FULLARTICLE_FAIL:
      return showFullArticleFail(state, action);
    default:
      return state;
  }
};

export default reducer;
