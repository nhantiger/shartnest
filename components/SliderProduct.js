import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleRight,FaUserCircle } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";


function SliderProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h1 className="slider-title flex">
        Các sản phẩm nổi bậc <FaArrowCircleRight className=" m-2 mt-3" />
      </h1>{" "}
      <Slider {...settings}>
        <div className="slider-item">
          <div className="slider-item-content mx-4 p-2 border rounded-lg border-[#00483d] border-r-4 border-b-4 ">
            <img
              src="https://nhaphanphoidienmay.com/wp-content/uploads/2018/08/chao-tu-aluminium-elo-duco-32cm.jpg"
              className="object-cover"
              alt="Product 1"
            />
            <h3>Chảo Từ Chống Dính ELO Duco 32cm</h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<AiOutlineStar className="text-yellow-500" />}
              fullSymbol={<AiFillStar className="text-yellow-500" />}
            />
            <div className="flex items-center">
              <FaUserCircle className="mb-2"/>
              <p className="ml-2">Nhân Ngô</p>
            </div>
            <button>Liên hệ</button>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-item-content mx-4 p-2 border rounded-lg border-[#00483d] border-r-4 border-b-4">
            <img
              src="https://trongoivanphongpham.com/wp-content/uploads/2021/09/chen-su-trang-5572.jpg"
              className="object-cover"
              alt="Product 2"
            />
            <h3>Chén Xứ Men Hoa Trùng Khánh</h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<AiOutlineStar className="text-yellow-500" />}
              fullSymbol={<AiFillStar className="text-yellow-500" />}
            />
            <div className="flex items-center">
              <FaUserCircle className="mb-2"/>
              <p className="ml-2">Nhân Ngô</p>
            </div>
            <button>Liên hệ</button>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-item-content mx-4 p-2 border rounded-lg border-[#00483d] border-r-4 border-b-4">
            <img
              src="https://elmich.vn/FileUpload/Images/20_1.jpg"
              alt="Product 3"
            />
            <h3>Nồi inox ELo Kallisto 24cm cao cấp</h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<AiOutlineStar className="text-yellow-500" />}
              fullSymbol={<AiFillStar className="text-yellow-500" />}
            />
            <div className="flex items-center">
              <FaUserCircle className="mb-2"/>
              <p className="ml-2">Nhân Ngô</p>
            </div>
            <button>Liên hệ</button>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-item-content mx-4 p-2 border rounded-lg border-[#00483d] border-r-4 border-b-4">
            <img
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/448/192/products/653-nag2206-avatar-1-fae86742-da7f-472f-976f-bab1ead4f7e8.jpg?v=1654158222080"
              alt="Product 4"
            />
            <h3>Chảo vân đá đáy từ Nagakawa NAG2206</h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<AiOutlineStar className="text-yellow-500" />}
              fullSymbol={<AiFillStar className="text-yellow-500" />}
            />
            <div className="flex items-center">
              <FaUserCircle className="mb-2"/>
              <p className="ml-2">Nhân Ngô</p>
            </div>
            <button>Liên hệ</button>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-item-content mx-4 p-2 border rounded-lg border-[#00483d] border-r-4 border-b-4">
            <img
              src="https://img.muji.net/img/item/4934761383651_1260.jpg"
              alt="Đĩa sâu lòng Imari 19 cm"
            />
            <h3>ĐĨA SỨ HÌNH OVAL MÀU BE / L SIZE L 22CM | MUJI</h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<AiOutlineStar className="text-yellow-500" />}
              fullSymbol={<AiFillStar className="text-yellow-500" />}
            />
            <div className="flex items-center">
              <FaUserCircle className="mb-2"/>
              <p className="ml-2">Nhân Ngô</p>
            </div>
            <button>Liên hệ</button>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-item-content mx-4 p-2 border rounded-lg border-[#00483d] border-r-4 border-b-4">
            <img
              src="https://bonoi.vn/wp-content/uploads/2020/02/Chao-double-germany-668-2.jpg"
              alt="Product 6"
            />
            <h3>Chảo chống dính Double Germany 668 30cm </h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<AiOutlineStar className="text-yellow-500" />}
              fullSymbol={<AiFillStar className="text-yellow-500" />}
            />
            <div className="flex items-center">
              <FaUserCircle className="mb-2"/>
              <p className="ml-2">Nhân Ngô</p>
            </div>
            <button>Liên hệ</button>
          </div>
        </div>{" "}
      </Slider>
    </div>
  );
}

export default SliderProduct;
