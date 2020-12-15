import React from "react";

// Styles
import "./Button.sass";

//components

export const Button = ({
  children = "default",
  type = "should",
  mr = "0px",
  bw = "1px",
  padding,
  bg,
  onClick = () => {},
  disabled,
}) => {
  const style = {
    marginRight: mr,
    borderWidth: bw,
    padding: padding,
    background: bg,
  };
  const preventAction = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button
      className="button"
      style={style}
      disabled={disabled}
      onClick={preventAction}
    >
      {children}
    </button>
  );
};
