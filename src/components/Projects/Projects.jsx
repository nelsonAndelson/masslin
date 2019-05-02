import React, { Component } from "react";
import Layout from "./../../Layout/Layout";
import ImageGallery from "./../ImageGallery";
import { Grid } from "semantic-ui-react";

export default class Projects extends Component {
  render() {
    return (
      <Layout>
        <Grid container className="mt-3">
          <h3>Projects</h3>
        </Grid>
        <ImageGallery />
      </Layout>
    );
  }
}
