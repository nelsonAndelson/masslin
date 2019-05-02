import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export default class Testimonies extends Component {
  state = {
    testies: [
      {
        id: 1,
        testie:
          "To receive tips on construction and painting, please subscribe!",
        author: "Nelson",
        company: "Red Token Solutions"
      },
      {
        id: 2,
        testie: "Women are cheffess!",
        author: "Cheffess",
        company: "Takes Cheffess"
      },
      {
        id: 3,
        testie: "Women are cheffess!",
        author: "Allie Daren",
        company: "American Cheffess"
      }
    ]
  };
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            <h3 style={{ fontWeight: 300 }}>Get to trust us</h3>
            <h4>See what others say:</h4>
            
          </Col>
        </Row>
      </div>
    );
  }
}
