import React from "react";
import PropTypes from "prop-types";

const BaseSection = ({ children, className = "" }) => {
  return (
    <section
      className={`flex flex-col gap-4 lg:py-[50px] lg:px-[300px] md:p-8 sm:p-4 ${className}`}
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
