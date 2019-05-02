import React, { useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import withOpacity from "./withOpacity";
import MyModal from "./MyModal";
import { ActionBtns } from "./ActionBtns";

import "../sass/product.scss";

import mainImg from "../img/mauro-bighin-498197-unsplash.jpg";
import canImg from "../img/COTY_cancut_regalselect_eggshell_US.jpg";

const styles = {
  actions: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "#444",
    zIndex: 2,
    transition: "all 0.9s ease-out"
  },
  actionBtn: {
    top: 80,
    left: 35,
    opacity: 1,
    color: "black"
  }
};

const AltProduct = ({ opacity, setOpacity, img, can }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid.Column mobile={8} tablet={4} computer={4} className="main">
        <div
          className="main-img"
          onMouseOver={() => setOpacity(0.7)}
          onMouseOut={() => setOpacity(0)}
        >
          <Image src={img || mainImg} alt="" />

          <div
            className="actions"
            style={{ ...styles.actions, ...{ opacity: opacity } }}
          >
            <ActionBtns setOpen={setOpen} styles={styles} />
          </div>
          <div className="can-img border-style">
            <Image src={can || canImg} alt="" />
          </div>
        </div>

        <h3 className="text-center p-0 mb-2">Washable</h3>
        <p className="text-center p-0 m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          iste autem. Cupiditate, eveniet atque.
        </p>
      </Grid.Column>

      <MyModal open={open} close={() => setOpen(false)} />
    </>
  );
};

export default withOpacity(AltProduct);
