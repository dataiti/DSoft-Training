import React from "react";
import BaseAvatar from "./BaseAvatar";
import BaseTypography from "./BaseTypography";
import { icons } from "constants/constant";

const BaseFeedbackCard = ({ feedback = {} }) => {
  return (
    <div className="flex flex-col gap-4 bg-white px-[18px] py-[24px] rounded-tr-3xl cursor-pointer border-l-4 border-transparent hover:border-orange-500 transition-all">
      <div className="flex gap-4">
        <BaseAvatar
          src={feedback.user.avatar}
          alt={feedback.user.name}
          className="h-[46px] w-[46px]"
          isRouded
        />
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-between">
            <BaseTypography
              variant="h4"
              text={feedback.user.name}
              className="text-slate-600 text-lg font-semibold"
            />
            <div className="flex items-center gap-1 text-orange-500">
              <icons.IoStarOutline />
              <icons.IoStarOutline />
              <icons.IoStarOutline />
              <icons.IoStarOutline />
              <icons.IoStarOutline />
            </div>
          </div>
          <BaseTypography text={feedback.user.type} className="text-gray-500" />
        </div>
      </div>
      <BaseTypography text={feedback.content} className="text-slate-600" />
    </div>
  );
};

export default BaseFeedbackCard;
