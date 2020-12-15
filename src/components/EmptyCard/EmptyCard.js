import React from "react";

import "../Card/Card.sass";

export const EmptyCard = ({ children, position = "center", bw = "1px" }) => {
  let style = {
    borderWidth: bw,
  };
  if (position === "center") {
    style = { ...style, margin: "0 auto" };
  } else if (position === "right") style = { ...style, marginLeft: "auto" };
  return (
    <>
      <div className="card card--with-width" style={style}>
        {children}
      </div>
    </>
  );
};
