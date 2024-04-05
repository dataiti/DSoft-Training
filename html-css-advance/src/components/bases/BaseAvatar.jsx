import React from "react";
import PropTypes from "prop-types";

const BaseAvatar = ({ src = "", alt = "", isRouded = false, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${isRouded ? "rounded-full" : "rounded-md"} ${className}`}
    />
  );
};

BaseAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  isRouded: PropTypes.bool,
  className: PropTypes.string,
};

export default BaseAvatar;
