import React from "react";
import PropTypes from "prop-types";

import BaseAvatar from "./BaseAvatar";
import BaseTypography from "./BaseTypography";
import BaseButton from "./BaseButton";

const BaseCarrerCard = ({ career = {} }) => {
  return (
    <div className="flex-1 flex gap-5 px-5 py-10 bg-white rounded-md cursor-pointer">
      <BaseAvatar
        src={career.image}
        alt={career.title}
        isRouded
        className="w-[64px] h-[64px]"
      />
      <div className="flex flex-col gap-4">
        <BaseTypography
          variant="h4"
          text={career.title}
          className="text-xl font-semibold text-slate-600"
        />
        <BaseTypography text={career.description} className="text-slate-600" />
        <div>
          <BaseButton text={career.buttonText} />
        </div>
      </div>
    </div>
  );
};

BaseCarrerCard.propTypes = {
  career: PropTypes.object,
};

export default BaseCarrerCard;
