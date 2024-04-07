import React from "react";
import PropTypes from "prop-types";

const BaseIconButton = ({ icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[50px] h-[50px] flex items-center justify-center flex-none rounded-full hover:bg-gray-300 active:opacity-75 transition-all text-gray-600 ${className} md:w-[40px] md:h-[40px]`}
    >
      {icon}
    </button>
  );
};

BaseIconButton.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default BaseIconButton;
