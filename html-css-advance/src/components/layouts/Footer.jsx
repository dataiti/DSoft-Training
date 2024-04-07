import React from "react";
import { Link } from "react-router-dom";

import BaseTypography from "components/bases/BaseTypography";
import BaseDots from "components/bases/BaseDots";

import { FOOTER_CONTENTS, icons } from "constants/constant";

const Footer = () => {
  return (
    <footer className="px-[300px] bg-violet-900 relative lg:px-[300px] md:px-8 sm:px-4">
      <div className="flex py-10 gap-[90px] sm:gap-[44px] sm:flex-wrap">
        {FOOTER_CONTENTS.map(({ id, title, links }) => (
          <div key={id} className="flex-1 flex flex-col gap-6 sm:gap-3">
            <BaseTypography
              variant="h3"
              text={title}
              className="text-lg text-white font-semibold"
            />
            <ul className="flex flex-col gap-1">
              {links.map((linkItem, index) => (
                <Link key={index} to={`/${linkItem}`}>
                  <BaseTypography text={linkItem} className="text-gray-500 " />
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr />
      <div className="py-4 flex sm:text-center lg:flex-row md:flex-row lg:justify-between md:justify-between sm:flex-col sm:items-center sm:gap-4">
        <BaseTypography
          variant="h1"
          text="© 2015-2020 Skillfy Education Private Limited. All rights reserved"
          className="text-gray-500 "
        />
        <div className="flex items-center gap-4">
          <span className="text-gray-500">
            <icons.IoLogoFacebook size={24} />
          </span>
          <span className="text-gray-500">
            <icons.IoLogoTwitter size={24} />
          </span>
          <span className="text-gray-500">
            <icons.IoLogoGoogle size={24} />
          </span>
          <span className="text-gray-500">
            <icons.IoLogoInstagram size={24} />
          </span>
        </div>
      </div>
      <BaseDots className="left-1 top-1 text-[#363642] md:hidden sm:hidden" />
    </footer>
  );
};

export default Footer;
