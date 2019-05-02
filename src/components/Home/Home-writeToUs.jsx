import React from "react";
import NewsLetter from "../NewsLetter";
import Contact from "../Contact";
import { Row, Col } from "reactstrap";

const HomeWriteToUs = () => {
  return (
    <>
      <h2>Write to us</h2>
      <Row>
        <Col xs={12} sm={6}>
          <NewsLetter />
        </Col>
        <Col xs={12} sm={6}>
          <Contact />
        </Col>
      </Row>
    </>
  );
};

export default HomeWriteToUs;
