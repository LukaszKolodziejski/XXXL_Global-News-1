import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import Button from "../../../UI/Button/Button";

class ClearFilters extends Component {
  state = { change: false };

  componentDidUpdate = () =>
    this.props.onFetchArticlesFilters(this.props.filters);

  clearButtonHandler = () => {
    const { filters } = { ...this.props };
    filters.forEach((filter) => {
      filter.data.values.forEach((value) => (value.active = false));
      filter.data.dropdownName = filter.data.name;
      filter.data.activeValue = "";
      filter.api.active = false;
      filter.api.query = filter.api.startQuery;
    });
    this.setState({ change: true });
    this.props.onClearButtonHandler(filters);
  };

  render() {
    return (
      <Button btnType="Clearbtn" clicked={this.clearButtonHandler}>
        Clear Filters
      </Button>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.articlesIndex.filters,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticlesFilters: (filters) =>
    dispatch(actions.fetchArticlesFilters(filters)),
  onClearButtonHandler: (filters) =>
    dispatch(actions.clearButtonHandler(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilters);
