import React from "react";
import PropTypes from "prop-types";

const BaseSection = ({ children, className = "" }) => {
  return (
    <section
      className={`flex flex-col gap-4 px-[300px] py-[50px] ${className}`}
    >
      {children}
    </section>
  );
};

BaseSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BaseSection;
