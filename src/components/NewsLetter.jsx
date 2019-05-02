import React from "react";
import { Input, Button } from "semantic-ui-react";

class NewsLetter extends React.Component {
  render() {
    return (
      <>
        <h3>Subscribe to our news letter</h3>
        <p>To receive tips on construction and painting, please subscribe!</p>
        <form>
          <Input fluid placeholder="Enter your email..." className="mb-3" />
          <Button fluid className="mb-3 my-button">
            Subscribe
          </Button>
        </form>
        <style>{`
        .my-button {
          background: #706A5A !important;
          color: #fff !important;
        }
        `}</style>
      </>
    );
  }
}

export default NewsLetter;
