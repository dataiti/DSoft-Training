import React, { useState } from "react";

import BaseButton from "components/bases/BaseButton";
import BaseIconButton from "components/bases/BaseIconButton";
import BaseTypography from "components/bases/BaseTypography";

import { NAVBAR_ITEMS, NAVBAR_MOBILE_ITEMS, icons } from "constants/constant";
import logo from "assets/images/logo.png";
import useWindowSize from "hooks/useWindowSize";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { isMobile, windowSize } = useWindowSize();

  console.log(isMobile);

  return (
    <header className="flex items-center justify-between gap h-[90px] bg-pink-50 lg:px-[300px] md:px-8 sm:px-4 relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />
        <BaseTypography
          text="Skillfy"
          className="text-black text-xl font-semibold"
        />
      </div>
      <ul className="lg:flex md:flex items-center lg:gap-8 md:gap-4 sm:hidden">
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
      <div className="lg:flex md:flex items-center lg:gap-3 md:gap-1 sm:hidden ">
        <BaseIconButton icon={<icons.IoSearchOutline size={20} />} />
        <BaseIconButton icon={<icons.IoCartOutline size={20} />} />
        <BaseButton text="Register" />
      </div>
      {isMobile && !isOpenMenu && (
        <BaseIconButton
          onClick={() => setIsOpenMenu(true)}
          icon={<icons.IoMenu size={24} />}
          className="hover:bg-pink-500 hover:text-white z-30"
        />
      )}
      {isMobile && isOpenMenu && (
        <BaseIconButton
          onClick={() => setIsOpenMenu(false)}
          icon={<icons.IoClose size={24} />}
          className="hover:bg-pink-500 hover:text-white z-30"
        />
      )}
      {isMobile && isOpenMenu && (
        <div className="absolute flex flex-col gap-4 inset-0 bg-pink-50 h-screen z-10 p-6">
          <div className="flex">
            <input
              placeholder="Search"
              className="px-4 py-2 rounded-l-md bg-white"
            />
            <button className="flex items-center justify-center bg-pink-500 py-2 px-4 text-white rounded-r-md">
              <icons.IoSearchOutline size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {NAVBAR_MOBILE_ITEMS.map(({ title, id, icon }) => {
              return (
                <li
                  key={id}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <span className="text-gray-600 group-hover:text-[#f85f58]">
                    {icon}
                  </span>
                  <BaseTypography
                    text={title}
                    className="text-gray-500 font-semibold group-hover:text-[#f85f58] transition-colors"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
