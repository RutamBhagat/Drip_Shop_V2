import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
import "./shopDisplay.styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const shopDisplay = () => {
  const categoriesMap = useSelector(selectCategories);
  const items = Object.keys(categoriesMap);
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={2}
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
      {items.map((item) => {
        return (
          <SwiperSlide
            key={item}
            className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat drop-shadow-lg sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
            style={{
              backgroundImage: `url(${categoriesMap[item].displayImg})`,
            }}
          >
            <Link to={item.toLowerCase()}>
              <div className="custom-gradient-shopDisplay flex h-[100%] w-[100%] items-end justify-start rounded-xl border border-white">
                <h1 className="py-10 pl-10 text-5xl font-bold text-white">
                  {item.toUpperCase()}
                </h1>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default shopDisplay;
