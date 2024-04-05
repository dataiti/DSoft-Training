import React, { useEffect, useRef, useState } from "react";

import BaseButton from "components/bases/BaseButton";
import BaseCategoryCard from "components/bases/BaseCategoryCard";
import BaseSelect from "components/bases/BaseSelect";
import BaseTypography from "components/bases/BaseTypography";
import BaseCourceCard from "components/bases/BaseCourceCard";
import BaseIconButton from "components/bases/BaseIconButton";
import {
  CAREER_DATA,
  CATEGORIES_DATA,
  COURSES_DATA,
  icons,
  ITEM_PER_SLIDE,
} from "constants/constant";
import BaseSection from "components/bases/BaseSection";
import BaseAvatar from "components/bases/BaseAvatar";
import BaseCarrerCard from "components/bases/BaseCarrerCard";
import BaseDots from "components/bases/BaseDots";

const Home = () => {
  const [indexSlide, setIndexSlide] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const coursesRef = useRef(null);

  useEffect(() => {
    const showSlide = () => {
      if (coursesRef.current) {
        setProgressPercent(
          (((indexSlide + 1) * 3) / COURSES_DATA.length) * 100
        );
        const offset = -(indexSlide * (coursesRef.current.clientWidth + 20));
        coursesRef.current.style.transform = `translateX(${offset}px)`;
      }
    };
    showSlide();

    const interval = setInterval(() => {
      handleClickNextSlide();
    }, [2000]);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSlide]);

  const handleClickPrevSlide = () => {
    const maxIndex = Math.ceil(COURSES_DATA.length / ITEM_PER_SLIDE) - 1;
    if (indexSlide <= 0) setIndexSlide(maxIndex);
    else setIndexSlide((prevIndex) => prevIndex - 1);
  };

  const handleClickNextSlide = () => {
    const maxIndex = Math.ceil(COURSES_DATA.length / ITEM_PER_SLIDE) - 1;
    if (indexSlide >= maxIndex) setIndexSlide(0);
    else setIndexSlide((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="">
      <BaseSection className="bg-violet-50">
        <div className="flex items-center justify-between">
          <BaseTypography
            variant="h3"
            text="Get choice of your cource"
            className="text-3xl text-black font-semibold"
          />
          <div className="flex items-center gap-4">
            <BaseSelect options={CATEGORIES_DATA} />
            <BaseButton text="View all" />
          </div>
        </div>
        <div className="overflow-hidden relative z-10 py-5">
          <div className="flex gap-5 transition-all" ref={coursesRef}>
            {COURSES_DATA.map((course) => {
              return <BaseCourceCard key={course.id} course={course} />;
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <BaseIconButton
            icon={<icons.IoArrowBackOutline />}
            onClick={handleClickPrevSlide}
            className="rounded-md bg-gray-300 hover:bg-gray-400 active:text-orange-500"
          />
          <div className="flex-1 w-full h-1">
            <div
              className={`h-full bg-orange-400 rounded-full transition-all`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <BaseIconButton
            icon={<icons.IoArrowForwardOutline />}
            onClick={handleClickNextSlide}
            className="rounded-md bg-gray-300 hover:bg-gray-400 active:text-orange-500"
          />
        </div>
      </BaseSection>

      <BaseSection className="bg-white">
        <div className="flex items-center justify-between">
          <BaseTypography
            variant="h3"
            text="Choice favorite cource from top category"
            className="text-3xl text-black font-semibold"
          />
          <BaseButton text="See all Categories" />
        </div>
        <div className="grid grid-cols-4 gap-5">
          {CATEGORIES_DATA.map((category) => (
            <BaseCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </BaseSection>

      <BaseSection className="bg-pink-50 relative">
        <div className="flex gap-5">
          {CAREER_DATA.map((career) => (
            <BaseCarrerCard key={career.id} career={career} />
          ))}
        </div>
        <BaseDots className="left-1 bottom-1 text-[#faaba8]" />
        <BaseDots className="right-1 top-1 text-[#d0d0d2]" />
      </BaseSection>
    </div>
  );
};

export default Home;
