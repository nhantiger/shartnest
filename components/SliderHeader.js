import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { url: "https://i.ytimg.com/vi/kzd2zMvey8s/maxresdefault.jpg" },
  { url: "https://dubaothoitiet.info/Uploads/images/hinh-anh-bao-ve-moi-truong-dep-chat-luong.jpg" },
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="md:mx-auto md:w-[1200px] my-4 ml-4 mr-2 rounded-lg">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div className="absolute  top-[-10px] left-0 w-full h-full flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-yellow-950  font-mono m-4 mb-[80px]">
                Tiết kiệm chi phí, tận dụng tối đa <br /> đồ dùng gia đình và
                bảo vệ môi trường
              </h1>
              <button className="bg-white px-4 py-2 text-black  font-bold rounded-lg shadow-lg z-10 hover:bg-[#00483D] hover:text-white transition duration-300 ease-in-out">
                Trao đổi ngay
              </button>
            </div>
            <img
              className="mx-auto w-full md:w-[1200px] md:object-cover md:h-[300px] h-[300px] object-cover md:my-4 rounded-lg"
              src={image.url}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
