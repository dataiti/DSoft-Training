import React from "react";
import PropTypes from "prop-types";

const BaseTypography = ({ variant = "lead", text = "", className = "" }) => {
  const variantToComponent = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    lead: "p",
  };

  const Component = variantToComponent[variant] || "p";

  return <Component className={`${className}`}>{text}</Component>;
};

BaseTypography.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default BaseTypography;
