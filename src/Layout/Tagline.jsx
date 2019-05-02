import React from "react";

const Tagline = props => {
  return (
    <>
      <div className="tagline info">
        <h4>Mashalini</h4>
        <p>{props.paragraph}</p>
      </div>
    </>
  );
};

export default Tagline;
