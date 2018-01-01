import React from "react";

const Footer = ({ product }) => {
  const colourStyle = {
    borderColor: product.color,
    borderStyle: "solid",
    borderTopWidth: "1px"
  };

  const urlStyle = {
    marginTop: "0.5rem",
    float: "right",
    fontSize: "0.74rem",
    fontFamily: "roboto"
  };

  return (
    <div style={colourStyle}>
      <p style={urlStyle}>{product.base}</p>
    </div>
  );
};

export default Footer;
