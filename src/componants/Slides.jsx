import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slides = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Welcome Home
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
                Discover a wide range of residential properties tailored to your
                lifestyle. From cozy single-family homes to modern apartments,
                we have the perfect place for you to call home.
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
              Explore Residential Properties
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Retire in Style
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
                Live your golden years to the fullest in our senior living
                communities. With amenities tailored to your needs and a
                supportive environment, enjoy a vibrant and fulfilling
                retirement lifestyle.
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
              Explore Senior Living Options
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Your Ideal Space Awaits
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
                Find the perfect space to create memories with your loved ones.
                Whether you are searching for a spacious townhouse, a convenient
                apartment, or a vibrant student housing community, we have
                options to suit every need.
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
              Find Your Ideal Space
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Comfort and Convenience
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
                Experience comfort and convenience in our residential
                communities. From amenities-rich townhouses to modern apartments
                with state-of-the-art facilities, discover the perfect blend of
                luxury and practicality.{" "}
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
              Discover Community Living
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
