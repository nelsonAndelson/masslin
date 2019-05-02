import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Icon } from "semantic-ui-react";
import slide1 from "../img/c7657963ceb7486880d289bee77eeb5e.jpg";
import slide2 from "../img/55955f1eac26d4f7e2fa166cbd523024df9d195d.jpg";
import slide3 from "../img/97541c162bc95970b190a3ad79a68b58.jpg";
import "../sass/splash screen.scss";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adpativeHeight: true,
  autoplaySpeed: 3000,
  autoplay: true
};

const content = [
  {
    image: slide1,
    title: "Mashalini",
    description:
      "Get a random image by appending ?random to the end of the url."
  },
  {
    image: slide2,
    title: "Mashalini",
    description:
      "Get a random image by appending ?random to the end of the url."
  },
  {
    image: slide3,
    title: "Mashalini",
    description:
      "Get a random image by appending ?random to the end of the url."
  }
];

const bg = url => {
  return {
    background: `url(${url})`,
    backgroundSize: "cover",
    height: "70vh",
    width: "100vw"
  };
};
export const SplashScreen = () => (
  <>
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index}>
          <div style={bg(item.image)} className="slide">
            <div className="dimmer" />

            <h1 className="text-center my-2 slide-title">{item.title}</h1>
            <h3 className="slide-tagline">
              Beutif<span>ied</span>
            </h3>
            <p className="slide-desc">
              <Icon name="checkmark" />
              {item.description.slice(0, 30)}
            </p>
            <p className="slide-desc">
              <Icon name="checkmark" />
              {item.description.slice(0, 38)}
            </p>
            <p className="slide-desc">
              <Icon name="checkmark" />
              {item.description.slice(0, 23)}
            </p>
          </div>

          {/* <div className="dimmer" /> */}
        </div>
      ))}
    </Slider>
    <style type="text/css">{`
    .slide {
      background: red;
      // z-index: 1;
    }

    .slide-title {
      color: white;
      font-weight: 100 !important;
      font-size: 5rem !important;
      margin-top: 4rem;import { Icon } from 'semantic-ui-react';
      padding: 0;
    }

    .slide-title:after {
      content: "";
      width: 20px;
      height: 10px;
      margin: 0 auto;
      display: block;
      background: #f52e55;
      transition: width 0.8s ease-out;
    }

    .slide-title:hover:after {
      width: 280px;
    }
    .slide-desc {
      line-height: 0.5;
      font-size: 2rem;
      color: #fff;
      margin-left: 5rem;
      font-weight: 100;
    }
    .slide-tagline {
      width: 10%;
      margin: 0 auto;
      padding: 0;
      font-size: 3rem;
      color: #dfeced;
    }
    i.icon {
      background: none;
    }
     i.mark.icon:before {
       color: #f52e55;
     }
    .slide-tagline span {
      color: #cd0e33;
    }
  `}</style>
  </>
);
