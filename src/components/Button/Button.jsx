import React from "react";
import "./Button.scss";

// This component is a custom button component which applies some basic styles to all buttons

const Button = ({ children, className, ...restProps }) => {
  return (
    <button className={`${className} button `} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
