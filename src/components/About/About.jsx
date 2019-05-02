import React from "react";
import img from "../../img/133A-Special+metallic+Stucco+paint+for+wall+Ottocento+Oikos+by+Italian+Design+Center+pte+ltd+Singapore+copy.jpg";
import { Grid, Icon } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Layout from "./../../Layout/Layout";

const About = () => (
  <Layout>
    <Grid container className="mt-3">
      <h3>About</h3>
      <Grid.Row columns={2}>
        <Grid.Column mobile={6} tablet={8} computer={8}>
          <Image src={img} />
        </Grid.Column>

        <Grid.Column mobile={10} tablet={4} computer={8}>
          <h4>
            We have served over 20 million clients
            <span style={{ color: "maroon" }}>Get a Product</span>
          </h4>
          <p>
            This website shall be the window through which we share our news and
            key business performances with you. We want to use this information
            tool to show you how our products are moving in the markets, how we
            are expanding and refining our operations and how we continue to
            attract committed, passionate employees who want to help us
          </p>
        </Grid.Column>
      </Grid.Row>

      <h3 className="text-center">WHY CHOOSE US</h3>
      <p className="text-left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas,
        eos officia maiores ipsam ipsum dolores reiciendis ad voluptas, animi
        obcaecati adipisci sapiente mollitia? Autem delectus quod accusamus
        tempora, aperiam minima assumenda
      </p>

      <Grid.Row columns={3}>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Icon
            name="check circle outline"
            size="big"
            className="w-100 mx-auto"
          />
          <h4 className="text-center">We're professional</h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            quas, eos officia maiores ipsam ipsum dolores reiciendis ad
            voluptas, animi obcaecati adipisci sapiente mollitia?
          </p>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Icon
            name="check circle outline"
            size="big"
            className="w-100 mx-auto"
          />
          <h4 className="text-center">We're professional</h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            quas, eos officia maiores ipsam ipsum dolores reiciendis ad
            voluptas, animi obcaecati adipisci sapiente mollitia?
          </p>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={6} computer={6}>
          <Icon
            name="check circle outline"
            size="big"
            className="w-100 mx-auto"
          />
          <h4 className="text-center">We're professional</h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            quas, eos officia maiores ipsam ipsum dolores reiciendis ad
            voluptas, animi obcaecati adipisci sapiente mollitia?
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx={true}>{`
      //   .ui.column.grid > [class*="twelve wide"].column,
      //   .ui.grid > .column.row > [class*="twelve wide"].column,
      //   .ui.grid > .row > [class*="twelve wide"].column,
      //   .ui.grid > [class*="twelve wide"].column {
      //     width: 100% !important;
      //   }
    `}</style>
  </Layout>
);

export default About;
