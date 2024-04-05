import React from "react";
import PropTypes from "prop-types";

const BaseSelect = ({ options = [] }) => {
  return (
    <select className="cursor-pointer py-2 px-4 rounded-md bg-white text-gray-500">
      {options.map(({ id, name }) => (
        <option key={id} value={name} className="text-sm text-gray-500">
          {name}
        </option>
      ))}
    </select>
  );
};

BaseSelect.propTypes = {
  options: PropTypes.array,
};

export default BaseSelect;
