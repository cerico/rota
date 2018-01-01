import React from "react";
import styles from "./header.css";

const Header = ({ product }) => {
  const colourStyle = {
    borderColor: product.color,
    fontFamily: "roboto"
  };

  const textStyle = {
    fontSize: "1.4rem",
    color: product.color,
    marginBottom: ".3rem"
  };

  return (
    <header className={styles.header} style={colourStyle}>
      <div style={textStyle}>{product.name}</div>
    </header>
  );
};

export default Header;
