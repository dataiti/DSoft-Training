import React from "react";

import BaseTypography from "./BaseTypography";
import BaseAvatar from "./BaseAvatar";
import { convertToDolar } from "helpers/helper";
import { icons } from "constants/constant";

const BaseCourceCard = ({ course = {} }) => {
  return (
    <div className="cursor-pointer hover:shadow-md hover:-translate-y-2 transition-all rounded-md bg-white w-[calc(33%-10px)] flex-shrink-0">
      <div className="flex flex-col gap-3 w-full p-3">
        <img
          src={course.courseImage}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">
              <icons.IoStarOutline />
            </span>
            <span className="text-xs text-gray-500 font-semibold">{`${course.rating} (${course.ratingCount})`}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500">
              <icons.IoStarOutline />
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              {course.view}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">
              <icons.IoStarOutline />
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              {course.videoCount} lession
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4 p-3">
        <BaseTypography
          text={course.courseTitle}
          className="text-2xl font-semibold"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BaseAvatar
              src={course.courseOwner.avatar}
              alt={`${course.courseOwner.firstName}  ${course.courseOwner.lastName}`}
              className="h-[40px] w-[40px]"
            />
            <BaseTypography
              text={`${course.courseOwner.firstName}  ${course.courseOwner.lastName}`}
              className="text-sm font-semibold text-gray-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <BaseTypography
              text={`$${convertToDolar(course.oldPrice)}`}
              className="font-semibold line-through text-gray-500"
            />

            <BaseTypography
              text={`$${convertToDolar(course.price)}`}
              className="text-lg font-semibold text-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCourceCard;
