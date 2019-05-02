import React from "react";
import { Grid, Image } from "semantic-ui-react";

const ImageGallery = () => {
  return (
    <div className="container">
      <Grid columns="equal" className="mt-2">
        <Grid.Row columns={4}>
          <Grid.Column mobile={16} tablet={8} computer={4} className="mb-2">
            <Image
              src="https://source.unsplash.com/user/erondu/1600x1000"
              alt=""
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4} className="mb-2">
            <Image
              src="https://source.unsplash.com/user/erondu/1600x1000"
              alt=""
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4} className="mb-2">
            <Image
              src="https://source.unsplash.com/user/erondu/1600x1000"
              alt=""
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4} className="mb-2">
            <Image
              src="https://source.unsplash.com/user/erondu/1600x1000"
              alt=""
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column mobile={8} tablet={8}>
            <Image
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt=""
            />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={8}>
            <Image
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt=""
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column mobile={10}>
            <Image src="https://source.unsplash.com/random/770x293" alt="" />
          </Grid.Column>
          <Grid.Column mobile={6}>
            <Image src="https://source.unsplash.com/random/570x373" alt="" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <style jsx>{`
        .mb-2 {
          padding: 0 0.5em !important;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
