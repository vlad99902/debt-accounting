import React from "react";

import "./Header.sass";

export const Header = ({
  fw = "500",
  fz = "26px",
  ta = "center",
  mb = "0px",
  mt = "0px",
  children,
}) => {
  const style = {
    fontWeight: fw,
    fontSize: fz,
    textAlign: ta,
    marginBottom: mb,
    marginTop: mt,
  };
  return (
    <h1 className="header" style={style}>
      {children}
    </h1>
  );
};
