import React, { Component } from "react";
import { Input, Button, TextArea, Form } from "semantic-ui-react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <h3>Send a message</h3>
        <Form>
          <Input fluid placeholder="Enter your name" className="mb-3" />
          <Input fluid placeholder="Enter your email..." className="mb-3" />
          <TextArea
            placeholder="Write to us..."
            className="mb-2"
            style={{ minHeight: 100, maxHeight: 100 }}
          />
          <Button fluid className="my-button">
            Send message
          </Button>
        </Form>
      </>
    );
  }
}
