import React from "react";
import { Grid } from "semantic-ui-react";
import Layout from "./../../Layout/Layout";
import AltProduct from "../AltProduct";

const Exterior = () => {
  return (
    <Layout>
      <Grid container className="mt-3">
        <h3 className="p-0">Exterior Paint</h3>
        <Grid.Row columns={2}>
          <AltProduct />
          <AltProduct />
          <AltProduct />
          <AltProduct />
        </Grid.Row>

        <Grid.Row columns={2}>
          <AltProduct />
          <AltProduct />
          <AltProduct />
          <AltProduct />
        </Grid.Row>
      </Grid>
      <style type="text/css">{`
        .main-img {
          position: relative;
        }
        .can-img {
          background: #fff;
          padding: 1.5em;
          border: 1px solid #ccc;
          position: absolute;
          top: 35.5%;
          left: 35.5%;
          width: 65%;
          height: 65%;
          -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
        .can-img img {
          width: 100px;
          margin: 25px 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Exterior;
