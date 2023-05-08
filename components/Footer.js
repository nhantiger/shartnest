import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00483D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Thông tin công ty</h2>
            <p className="mb-2">
              Địa chỉ: 123 đường ABC, quận XYZ, TP. Hồ Chí Minh
            </p>
            <p className="mb-2">Điện thoại: 0123456789</p>
            <p>Email: info@sharenest.com</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Liên kết nhanh</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Trang chủ</a>
              </li>
              <li className="mb-2">
                <a href="#">Sản phẩm</a>
              </li>
              <li className="mb-2">
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="text-sm mb-2 md:mb-0">
            © 2023 ShareNest. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
