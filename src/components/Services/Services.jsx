import React from "react";
import Layout from "./../../Layout/Layout";
import { Card, Button, Grid, Icon } from "semantic-ui-react";

const dummyData = [
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    header: "washable",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veritatis blanditiis.",
    btn() {
      return <Button>Read more</Button>;
    }
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    header: "washable",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veritatis blanditiis.",
    btn() {
      return <Button>Read more</Button>;
    }
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    header: "washable",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veritatis blanditiis.",
    btn() {
      return <Button>Read more</Button>;
    }
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    header: "washable",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veritatis blanditiis.",
    btn() {
      return <Button>Read more</Button>;
    }
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    header: "washable",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veritatis blanditiis.",
    btn() {
      return <Button>Read more</Button>;
    }
  },
  {
    image: "https://source.unsplash.com/user/erondu/1600x900",
    header: "washable",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt veritatis blanditiis.",
    btn() {
      return <Button>Read more</Button>;
    }
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="container">
        <h4>Services</h4>
        <h3>Interior Painting</h3>
        <Grid>
          <Grid.Row columns="equal">
            {dummyData
              .filter((item, index) => index < 4)
              .map(({ image, desc, header, btn }, index) => (
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={4}
                  key={index}
                  className="mb-3"
                >
                  <Card
                    className="card"
                    image={image}
                    description={desc}
                    header={header}
                    extra={btn()}
                  />
                </Grid.Column>
              ))}
            {dummyData
              .filter((item, index) => index < 4)
              .map(({ image, desc, header, btn }, index) => (
                <Grid.Column mobile={16} tablet={8} computer={4} key={index}>
                  <Card
                    className="card mb-3"
                    image={image}
                    description={desc}
                    header={header}
                    extra={btn()}
                  />
                </Grid.Column>
              ))}
          </Grid.Row>
          <Button fluid className="d-md-none mt-3">
            More <Icon name="caret down" className="caret-down" />
          </Button>

          <h3>Exterior Painting</h3>
          <Grid.Row columns="equal">
            {dummyData
              .filter((item, index) => index < 4)
              .map(({ image, desc, header, btn }, index) => (
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={4}
                  key={index}
                  className="mb-3"
                >
                  <Card
                    className="card"
                    image={image}
                    description={desc}
                    header={header}
                    extra={btn()}
                  />
                </Grid.Column>
              ))}
            {dummyData
              .filter((item, index) => index < 4)
              .map(({ image, desc, header, btn }, index) => (
                <Grid.Column mobile={16} tablet={8} computer={4} key={index}>
                  <Card
                    className="card mb-3"
                    image={image}
                    description={desc}
                    header={header}
                    extra={btn()}
                  />
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>
        <style>{`
        button {
          background: #706A5A !important;
          color: #fff !important;
        }
        .card {
          width: 100% !important;
          }
          .content .header {
            color: gray !important;
            font-weight: 400 !important;
            text-transform: 
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Services;
