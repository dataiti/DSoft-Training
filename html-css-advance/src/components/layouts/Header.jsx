import BaseButton from "components/bases/BaseButton";
import BaseIconButton from "components/bases/BaseIconButton";
import BaseTypography from "components/bases/BaseTypography";
import { NAVBAR_ITEMS, icons } from "constants/constant";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap h-[90px] bg-pink-50 px-[300px]">
      <div className="">
        <img src="" alt="" className="" />
        <BaseTypography
          text="Skillfy"
          className="text-black text-xl font-semibold"
        />
      </div>
      <ul className="flex items-center gap-8">
        {NAVBAR_ITEMS.map(({ title, id }) => {
          return (
            <li key={id} className="flex items-center gap-1 cursor-pointer ">
              <BaseTypography
                text={title}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              />
              <span className="text-gray-600">
                {<icons.IoChevronDown size={12} />}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-3">
        <BaseIconButton icon={<icons.IoSearchOutline size={20} />} />
        <BaseIconButton icon={<icons.IoCartOutline size={20} />} />
        <BaseButton text="Register" />
      </div>
    </header>
  );
};

export default Header;
