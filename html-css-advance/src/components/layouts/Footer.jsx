import React from "react";
import { Link } from "react-router-dom";

import BaseTypography from "components/bases/BaseTypography";
import { FOOTER_CONTENTS } from "constants/constant";
import BaseDots from "components/bases/BaseDots";

const Footer = () => {
  return (
    <footer className="px-[300px] bg-violet-900 relative">
      <div className="flex py-10 gap-[90px]">
        {FOOTER_CONTENTS.map(({ id, title, links }) => (
          <div key={id} className="flex-1 flex flex-col gap-6">
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
      <div className="py-4">
        <BaseTypography
          variant="h1"
          text="© 2015-2020 Skillfy Education Private Limited. All rights reserved"
          className="text-gray-500 "
        />
      </div>
      <BaseDots className="left-1 top-1 text-[#363642]" />
    </footer>
  );
};

export default Footer;
