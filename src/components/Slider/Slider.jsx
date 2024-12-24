import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import slider1 from "../../assets/sliderImages/slider1.jpg";
import slider2 from "../../assets/sliderImages/slider2.jpg";
import slider3 from "../../assets/sliderImages/slider3.jpg";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="object-cover w-full" src={slider1} />
          <div
            className="absolute top-0 w-full h-full text-start flex flex-col justify-center pl-20
           p-12 text-white bg-black bg-opacity-50"
          >
            <h1 className="text-sm sm:text-lg md:text-2xl uppercase tracking-wide border-l-4 border-green-500 pl-4 lg:text-5xl text-green-500 font-bold mb-2">
              Make a Difference Today
            </h1>
            <p className="max-w-md hidden sm:block text-md text-gray-400 sm:mt-2 sm:mb-2 md:mb-4 md:mt-4">
              Volunteer your time and skills to create a positive impact in your
              community. Every action counts, and together, we can bring about
              meaningful change. Join us today and help make the world a better
              place.
            </p>
            <div>
              <Link
                to={"/all-volunteer-need-post"}
                className="btn btn-xs px-1 sm:px-3 sm:btn-sm md:btn-md border-green-600 text-green-600 btn-outline mt-2 rounded-none hover:bg-green-700"
              >
                Become a volunteer
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover w-full" src={slider1} />
          <div
            className="absolute top-0 w-full h-full text-start flex flex-col justify-center pl-20
           p-12 text-white bg-black bg-opacity-50"
          >
            <h1 className="text-sm sm:text-lg md:text-2xl uppercase tracking-wide border-l-4 border-green-500 pl-4 lg:text-5xl text-green-500 font-bold mb-2">
              Join Hands for a Cause
            </h1>
            <p className="max-w-md hidden sm:block text-md text-gray-400 sm:mt-2 sm:mb-2 md:mb-4 md:mt-4">
              Whether it's helping those in need, supporting local initiatives,
              or contributing to global causes, volunteering is a powerful way
              to make a difference. Come together, make an impact, and transform
              lives with your contribution.
            </p>
            <div>
              <Link
                to={"/all-volunteer-need-post"}
                className="btn btn-xs px-1 sm:px-3 sm:btn-sm md:btn-md border-green-600 text-green-600 btn-outline mt-2 rounded-none hover:bg-green-700"
              >
                Become a volunteer
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover w-full" src={slider1} />
          <div
            className="absolute top-0 w-full h-full text-start flex flex-col justify-center pl-20
           p-12 text-white bg-black bg-opacity-50"
          >
            <h1 className="text-sm sm:text-lg md:text-2xl uppercase tracking-wide border-l-4 border-green-500 pl-4 lg:text-5xl text-green-500 font-bold mb-2">
              Volunteer. Impact. Inspire
            </h1>
            <p className="max-w-md hidden sm:block text-md text-gray-400 sm:mt-2 sm:mb-2 md:mb-4 md:mt-4">
              When you volunteer, you don’t just help others—you inspire them to
              act too. By sharing your time and talents, you can create lasting
              change and encourage others to join the movement. Together, we can
              do more.
            </p>
            <div>
              <Link
                to={"/all-volunteer-need-post"}
                className="btn btn-xs px-1 sm:px-3 sm:btn-sm md:btn-md border-green-600 text-green-600 btn-outline mt-2 rounded-none hover:bg-green-700"
              >
                Become a volunteer
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
