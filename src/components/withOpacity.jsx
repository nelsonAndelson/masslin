import React, { useState } from "react";

const withOpacity = OrginalComponent => {
  const NewComponent = props => {
    let [opacity, setOpacity] = useState(0);
    return (
      <OrginalComponent opacity={opacity} setOpacity={setOpacity} {...props} />
    );
  };
  return NewComponent;
};

export default withOpacity;
