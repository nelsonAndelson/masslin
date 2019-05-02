import React from "react";
import { Row, Col } from "reactstrap";
import img from "../../img/133A-Special+metallic+Stucco+paint+for+wall+Ottocento+Oikos+by+Italian+Design+Center+pte+ltd+Singapore+copy.jpg";
import WhyUsItem from "./WhyUsItem";
import { Image } from "semantic-ui-react";

import "../../sass/home whyus.scss";

const HomeWhyUs = () => {
  return (
    <div>
      <h1>Services</h1>
      <Row className="v-tablet">
        <Col xs={12} sm={12} lg={4} md={4}>
          <WhyUsItem />
        </Col>

        <Col xs={12} sm={12} lg={4} md={4}>
          <WhyUsItem />
        </Col>

        <Col xs={12} sm={12} lg={4} md={4}>
          <WhyUsItem />
        </Col>
      </Row>
      <style>{`
        .item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default HomeWhyUs;
