import React from "react";
import PropTypes from "prop-types";
import BaseTypography from "./BaseTypography";

const BaseCategoryCard = ({ category = {} }) => {
  return (
    <div className="flex flex-col gap-4 py-[32px] px-[18px] rounded-md ">
      <span>{category.icon}</span>
      <BaseTypography variant="h4" text={category.name} className="text-xl" />
      <BaseTypography
        text={category.description}
        className="text-gray-500 text-[15px]"
      />
    </div>
  );
};

BaseCategoryCard.propTypes = {
  category: PropTypes.object,
};

export default BaseCategoryCard;
