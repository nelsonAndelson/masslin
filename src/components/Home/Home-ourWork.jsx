import React from "react";
import { Row, Col } from "reactstrap";
import img from "../../img/133A-Special+metallic+Stucco+paint+for+wall+Ottocento+Oikos+by+Italian+Design+Center+pte+ltd+Singapore+copy.jpg";

const HomeOurWork = () => {
  return (
    <>
      <h2>Our work.</h2>
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <div className="card">
            <div className="main-img">
              <img src={img} alt="" />
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <div className="card">
            <div className="main-img">
              <img src={img} alt="" />
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <div className="card">
            <div className="main-img">
              <img src={img} alt="" />
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <div className="card">
            <div className="main-img">
              <img src={img} alt="" />
            </div>
          </div>
        </Col>
        <style type="text/css">
          {`
        .card {
            // width: 75%;
            // margin: 0 auto;
            margin-bottom: 25px;
        }
            .card .main-img {
                position: relative;
            }
            .main-img img {
                width: 100%;
                // height: 350px;
            }
        `}
        </style>
      </Row>
    </>
  );
};

export default HomeOurWork;
