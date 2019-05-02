import React from "react";
import { Grid } from "semantic-ui-react";
import AltProduct from "./../AltProduct";
import { connect } from "react-redux";
import img1 from "../../img/ee2b4429aba3683af7135688440c0c65.jpg";
import img2 from "../../img/silver-wall-paint-texture-different-types-of-wall-paint-textured-wall-finishes-different-types-of-wall-texture-textures-drywall-texture-home-interior-decorations-for-sale.jpg";
import img3 from "../../img/its-in-the-colours-you-choose.jpg";

import can1 from "../../img/paint can.jpg";

const HomePainted = ({ products }) => {
  return (
    <>
      <h2>Get it painted.</h2>
      <Grid container>
        <Grid.Row columns={4}>
          <AltProduct img={img1} can={can1} />
          <AltProduct img={img2} />
          <AltProduct img={img3} />
          <AltProduct />
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return { products: state.allProducts.filter((item, index) => index < 4) };
};

export default connect(mapStateToProps)(HomePainted);
