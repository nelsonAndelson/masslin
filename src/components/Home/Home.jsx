import React from "react";
import Layout from "../../Layout/Layout";
import HomePainted from "./Home-painted";
import HomeWhyUs from "./Home-whyUs";
import HomeOurWork from "./Home-ourWork";
import HomeWriteToUs from "./Home-writeToUs";

import "../../sass/app.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home container mb-3">
        <HomePainted />
        <HomeWhyUs />
        <HomeOurWork />
        <HomeWriteToUs />
      </div>
    </Layout>
  );
};

export default Home;
