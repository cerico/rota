import React from "react";
import WideLogo from "./wide-logo";

import styles from "./card.css";

const Body = props => {
  const divStyle = {
    paddingTop: ".625rem",
    height: "100%"
  };

  const whatStyle = {
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div style={whatStyle}>
      <WideLogo {...props} />
    </div>
  );
};

export default Body;
