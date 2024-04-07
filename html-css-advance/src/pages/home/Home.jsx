import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import BaseButton from "components/bases/BaseButton";
import BaseCategoryCard from "components/bases/BaseCategoryCard";
import BaseSelect from "components/bases/BaseSelect";
import BaseTypography from "components/bases/BaseTypography";
import BaseCourceCard from "components/bases/BaseCourceCard";
import BaseIconButton from "components/bases/BaseIconButton";
import BaseSection from "components/bases/BaseSection";
import BaseCarrerCard from "components/bases/BaseCarrerCard";
import BaseDots from "components/bases/BaseDots";
import BaseFeedbackCard from "components/bases/BaseFeedbackCard";
import BaseAvatar from "components/bases/BaseAvatar";

import {
  CAREER_DATA,
  CATEGORIES_DATA,
  COURSES_DATA,
  FEEDBACKS_DATA,
  icons,
  PARTNERS_DATA,
} from "constants/constant";
import heroimage from "assets/images/hero-image.jpg";
import useWindowSize from "hooks/useWindowSize";

const Home = () => {
  const [indexSlide, setIndexSlide] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [itemPerSlide, setItemPerSlide] = useState(3);

  const coursesRef = useRef(null);

  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (isMobile) setItemPerSlide(1);
    else setItemPerSlide(3);
  }, [isMobile]);

  useEffect(() => {
    const showSlide = () => {
      if (coursesRef.current) {
        setProgressPercent(
          (((indexSlide + 1) * itemPerSlide) / COURSES_DATA.length) * 100
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
    const maxIndex = Math.ceil(COURSES_DATA.length / itemPerSlide) - 1;
    if (indexSlide <= 0) setIndexSlide(maxIndex);
    else setIndexSlide((prevIndex) => prevIndex - 1);
  };

  const handleClickNextSlide = () => {
    const maxIndex = Math.ceil(COURSES_DATA.length / itemPerSlide) - 1;
    if (indexSlide >= maxIndex) setIndexSlide(0);
    else setIndexSlide((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="">
      <BaseSection className="bg-pink-50 relative sm:!py-[50px]">
        <div className="flex items-center justify-between gap-16 lg:flex-row md:flex-row sm:flex-col-reverse">
          <div className="flex-1 flex flex-col gap-8">
            <BaseTypography
              variant="h2"
              text="Turn your ambition into a success story"
              className="lg:text-[55px] font-bold lg:leading-[70px] md:text-[40px] sm:text-[40px] sm:leading-[50px]"
            />
            <BaseTypography
              text="Choose from over 100.000 online video courses with new additons published every mont."
              className="text-xl font-semibold text-slate-500"
            />
            <div className="rounded-lg flex shadow-input-shadow items-center md:mr-16 lg:mr-16">
              <input
                placeholder="Search your favourite cources"
                className="w-full bg-white p-4 rounded-l-lg"
              />
              <button className="py-3 px-6 bg-pink-500 text-white rounded-r-lg">
                <icons.IoSearchOutline size={32} />
              </button>
            </div>
          </div>
          <div className="relative sm:ml-10">
            <div className="absolute -left-9 -top-9 flex items-center justify-center">
              <img
                src={heroimage}
                alt=""
                className="object-cover rounded-3xl lg:h-[480px] lg:w-[388px] h-[420px] sm:w-[320px]"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center rounded-full bg-white hover:bg-pink-200 transition-all text-[#f66962]">
                <icons.IoPlaySharp size={36} />
              </button>
            </div>
            <div className=" lg:h-[480px] lg:w-[388px] border-4 border-[#f68c1f] rounded-3xl h-[420px] w-[320px]"></div>
          </div>
        </div>
        <BaseDots className="left-1 bottom-1 text-[#f68c1f]" />
        <BaseDots className="right-1 top-1 text-[#f68c1f]" />
      </BaseSection>

      <BaseSection className="bg-violet-50 relative">
        <div className="flex items-center justify-between lg:flex-row md:flex-row sm:flex-col sm:items-start sm:gap-4">
          <BaseTypography
            variant="h3"
            text="Get choice of your cource"
            className="lg:text-3xl md:text-2xl text-black font-semibold sm:text-xl"
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
          <div className="flex-1 w-full h-1 z-10">
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
        <BaseDots className="grid-cols-6 left-[48%] bottom-[58px] text-[#b5b5b8]" />
      </BaseSection>

      <BaseSection className="bg-white">
        <div className="flex items-center justify-between lg:flex-row md:flex-row sm:flex-col sm:items-start sm:gap-4">
          <BaseTypography
            variant="h3"
            text="Choice favorite cource from top category"
            className="lg:text-3xl md:text-2xl text-black font-semibold sm:text-xl"
          />
          <BaseButton text="See all Categories" />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 lg:gap-5 md:gap-3 sm:gap-2 sm:grid-cols-2">
          {CATEGORIES_DATA.map((category) => (
            <BaseCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </BaseSection>

      <BaseSection className="bg-pink-50 lg:!py-[100px] md:!py-[50px] sm:!py-[50px] relative">
        <div className="flex flex-col gap-6 items-center">
          <BaseTypography
            variant="h4"
            text="Online Coaching Lessons For Remote Learning"
            className="lg:text-3xl font-semibold leading-[60px] md:text-2xl sm:text-xl mr-10 text-center"
          />
          <BaseTypography
            text="100% Online learning from the would's best universities and
            companies"
            className="text-lg text-slate-500 text-center"
          />
          <BaseButton text="Join Today" />
        </div>
        <BaseAvatar
          src={heroimage}
          alt="avatar"
          isRouded
          className="h-[60px] w-[60px] absolute left-[300px] top-[50px] lg:block sm:hidden md:hidden"
        />
        <BaseAvatar
          src={heroimage}
          alt="avatar"
          isRouded
          className="h-[60px] w-[60px] absolute left-[100px] top-[50%] -translate-y-[50%] lg:block sm:hidden md:hidden"
        />
        <BaseAvatar
          src={heroimage}
          alt="avatar"
          isRouded
          className="h-[60px] w-[60px] absolute left-[400px] bottom-[50px] lg:block sm:hidden md:hidden"
        />
        <BaseAvatar
          src={heroimage}
          alt="avatar"
          isRouded
          className="h-[60px] w-[60px] absolute right-[300px] top-[30px] lg:block sm:hidden md:hidden"
        />
        <BaseAvatar
          src={heroimage}
          alt="avatar"
          isRouded
          className="h-[60px] w-[60px] absolute right-[100px] top-[50%] lg:block -translate-y-[50%] sm:hidden md:hidden"
        />
        <BaseAvatar
          src={heroimage}
          alt="avatar"
          isRouded
          className="h-[60px] w-[60px] absolute right-[400px] bottom-[50px] lg:block sm:hidden md:hidden"
        />
        <div className="h-[60px] w-[60px] border-8 border-[#f66962] rounded-full absolute left-[200px] top-[50%] -translate-y-[50%] lg:block sm:hidden md:hidden"></div>
        <div className="h-[60px] w-[60px] border-8 border-[#f66962] rounded-full absolute right-[120px] top-[30%] -translate-y-[50%] lg:block sm:hidden md:hidden"></div>
        <BaseDots className="left-1 bottom-1 text-[#faaba8]" />
        <BaseDots className="right-1 top-[20%] text-[#d0d0d2]" />
      </BaseSection>

      <BaseSection className="bg-white lg:!pb-[90px] md:!pb-[70px] sm:py-[50px]">
        <div className="flex items-center justify-between gap-16 lg:flex-row md:flex-row sm:flex-col-reverse">
          <div className="flex-1 flex flex-col gap-8">
            <BaseTypography
              variant="h4"
              text="Know about learning learning platform"
              className="lg:text-3xl font-semibold leading-[60px] md:text-2xl sm:text-xl mr-10"
            />
            <BaseTypography
              text="With our growing catalog of over 30 Nanodegree programs from beginner to advanced, you're sure to find one that fits your career goals"
              className="text-lg text-slate-500"
            />
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-4">
                <span className="text-[#48cab3]">
                  <icons.IoCheckboxOutline size={24} />
                </span>
                <BaseTypography
                  className="text-slate-500 font-semibold"
                  text="Free E-book, Video & Consolation"
                />
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#48cab3]">
                  <icons.IoCheckboxOutline size={24} />
                </span>
                <BaseTypography
                  className="text-slate-500 font-semibold"
                  text="Top instructors from arround world"
                />
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#48cab3]">
                  <icons.IoCheckboxOutline size={24} />
                </span>
                <BaseTypography
                  className="text-slate-500 font-semibold"
                  text="Top courses for your team."
                />
              </li>
            </ul>
            <div>
              <BaseButton text="Start learning now" />
            </div>
          </div>
          <div className="relative sm:ml-10">
            <div className="absolute -left-9 -bottom-9 flex items-center justify-center">
              <img
                src={heroimage}
                alt=""
                className="object-cover rounded-tr-[120px] lg:h-[480px] lg:w-[388px] h-[420px] sm:w-[320px]"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center rounded-full bg-white hover:bg-pink-200 transition-all text-[#f66962]">
                <icons.IoPlaySharp size={36} />
              </button>
            </div>
            <div className=" lg:h-[480px] lg:w-[388px] border-4 border-[#f66962] rounded-tr-[120px] h-[420px] w-[320px]"></div>
          </div>
        </div>
      </BaseSection>

      <BaseSection className="bg-violet-50">
        <div className="flex items-center justify-between lg:flex-row md:flex-row  sm:flex-col sm:items-start sm:gap-4">
          <BaseTypography
            variant="h3"
            text="What our students have to say"
            className="lg:text-3xl md:text-2xl text-black font-semibold sm:text-xl"
          />
          <div className="flex items-center gap-6">
            <BaseIconButton
              icon={<icons.IoArrowBackOutline />}
              onClick={handleClickPrevSlide}
              className="rounded-md bg-white hover:bg-gray-200 active:text-orange-500"
            />
            <BaseIconButton
              icon={<icons.IoArrowForwardOutline />}
              onClick={handleClickNextSlide}
              className="rounded-md bg-white hover:bg-gray-200 active:text-orange-500"
            />
          </div>
        </div>
        <div className="flex gap-[24px] md:flex-row lg:flex-row sm:flex-col">
          {FEEDBACKS_DATA.map((feedback) => (
            <BaseFeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </BaseSection>

      <BaseSection className="bg-white">
        <div className="flex items-center justify-between lg:flex-row md:flex-row sm:flex-col sm:items-start sm:gap-4">
          <BaseTypography
            variant="h3"
            text="Trusted by our awesome partners"
            className="lg:text-3xl md:text-2xl text-black font-semibold sm:text-xl"
          />
          <div className="flex items-center gap-6">
            <BaseIconButton
              icon={<icons.IoArrowBackOutline />}
              onClick={handleClickPrevSlide}
              className="rounded-md bg-gray-300 hover:bg-gray-400 active:text-orange-500"
            />
            <BaseIconButton
              icon={<icons.IoArrowForwardOutline />}
              onClick={handleClickNextSlide}
              className="rounded-md bg-gray-300 hover:bg-gray-400 active:text-orange-500"
            />
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-3">
          {PARTNERS_DATA.map((partner) => (
            <Link
              key={partner.id}
              to={`/partner/${partner.name}`}
              className="flex items-center justify-center bg-white hover:shadow-lg px-3 py-1 rounded-md cursor-pointer transition-all"
            >
              <img
                key={partner.id}
                src={partner.image}
                alt={partner.name}
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      </BaseSection>

      <BaseSection className="bg-pink-50 relative">
        <div className="flex gap-5 lg:flex-row md:flex-row sm:flex-col sm:gap-4">
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
