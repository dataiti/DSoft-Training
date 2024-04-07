import React from "react";
import PropTypes from "prop-types";
import BaseTypography from "./BaseTypography";

const BaseCategoryCard = ({ category = {} }) => {
  return (
    <div className="category-card-item flex flex-col gap-4 lg:py-[32px] lg:px-[18px] sm:py-[28px] sm:px-[16px] rounded-md cursor-pointer">
      <span className="category-card-icon flex items-center justify-center w-11 h-11 rounded-md">
        {category.icon}
      </span>
      <BaseTypography
        variant="h4"
        text={category.name}
        className="text-xl font-semibold"
      />
      <BaseTypography
        text={category.description}
        className="category-card-description text-gray-500 lg:text-[15px] md:text-[15px] sm:text-[11px] lg:leading-6"
      />
    </div>
  );
};

BaseCategoryCard.propTypes = {
  category: PropTypes.object,
};

export default BaseCategoryCard;
