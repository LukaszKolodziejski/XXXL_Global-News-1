import React, { Component } from "react";
import classes from "./css/Layout.module.css";

class Layout extends Component {
  state = {};
  render() {
    return <main className={classes.Content}>{this.props.children}</main>;
  }
}

export default Layout;
