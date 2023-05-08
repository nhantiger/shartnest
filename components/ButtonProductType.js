import React from "react";
import Slider from "react-slick";

function ButtonProductType() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container md:mr-[220px] md:w-[1075px] my-4 rounded-lg md:mx-auto">
      <div className="m-4">
        <Slider {...settings}>
          <div className="px-2">
            <button className="w-full my-4 p-4 rounded-lg bg-[#00483D] text-white border-black hover:border-l-4 hover:border-b-4 border-l-4 border-b-4 hover:bg-white hover:text-[#00483D] hover:border-black hover:border-2 font-bold active:scale-95 active:border-l-2 active:border-b-2">
              Đồ gia dụng điện tử
            </button>
          </div>
          <div className="px-2">
            <button className="w-full my-4 p-4 rounded-lg bg-[#00483D] text-white border-black hover:border-l-4 hover:border-b-4 border-l-4 border-b-4 hover:bg-white hover:text-[#00483D] hover:border-black hover:border-2 font-bold active:scale-95 active:border-l-2 active:border-b-2">
              Đồ gia dụng nhà bếp
            </button>
          </div>
          <div className="px-2">
            <button className="w-full my-4 p-4 rounded-lg bg-[#00483D] text-white border-black hover:border-l-4 hover:border-b-4 border-l-4 border-b-4 hover:bg-white hover:text-[#00483D] hover:border-black hover:border-2 font-bold active:scale-95 active:border-l-2 active:border-b-2">
              Đồ gia dụng gia đình
            </button>
          </div>
          <div className="px-2">
            <button className="w-full my-4 p-4 rounded-lg bg-[#00483D] text-white border-black hover:border-l-4 hover:border-b-4 border-l-4 border-b-4 hover:bg-white hover:text-[#00483D] hover:border-black hover:border-2 font-bold active:scale-95 active:border-l-2 active:border-b-2">
              Thiết bị văn phòng
            </button>
          </div>
          {/* Add more buttons here if needed */}
        </Slider>
      </div>
    </div>
  );
}

export default ButtonProductType;
