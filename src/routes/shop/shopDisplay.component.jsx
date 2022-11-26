import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./shopDisplay.styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";

const shopDisplay = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper my-auto py-10"
    >
      <SwiperSlide
        className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat drop-shadow-lg sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
        style={{
          backgroundImage: `url("https://wallpapers.com/images/hd/candice-swanepoel-disheveled-hair-9w2obtoluwbfl862.jpg")`,
        }}
      >
        <Link to="hats">
          <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
            <h1 className="py-10 pl-10 text-5xl font-bold text-white">
              WOMENS
            </h1>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide
        className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/ac/91/13/ac9113cc327a78c230c3f083359b6fd7.jpg")`,
        }}
      >
        <Link to="hats">
          <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
            <h1 className="py-10 pl-10 text-5xl font-bold text-white">MENS</h1>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide
        className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/dc/84/e4/dc84e45c867b4ff3e281b7fd4fa9c4f7.jpg")`,
        }}
      >
        <Link to="hats">
          <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
            <h1 className="py-10 pl-10 text-5xl font-bold text-white">HATS</h1>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide
        className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/8e/e1/c4/8ee1c467dc1f896b1a7691e3865ba575.jpg")`,
        }}
      >
        <Link to="hats">
          <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
            <h1 className="py-10 pl-10 text-5xl font-bold text-white">SUITS</h1>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide
        className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
        style={{
          backgroundImage: `url("https://rare-gallery.com/uploads/posts/4548884-women-delaia-gonzalez-women-with-glasses-brunette-portrait-depth-of-field-street-red-coat-coats.jpg")`,
        }}
      >
        <Link to="hats">
          <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
            <h1 className="py-10 pl-10 text-5xl font-bold text-white">
              JACKETS
            </h1>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide
        className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
        style={{
          backgroundImage: `url("https://i.ytimg.com/vi/4BrMCmVOlgw/maxresdefault.jpg")`,
        }}
      >
        <Link to="hats">
          <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
            <h1 className="py-10 pl-10 text-5xl font-bold text-white">
              SNEAKERS
            </h1>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default shopDisplay;
