import React from "react";
import PropTypes from "prop-types";

const BaseButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-pink-500 hover:bg-pink-600 active:opacity-75 transition-all text-white rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

BaseButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default BaseButton;
