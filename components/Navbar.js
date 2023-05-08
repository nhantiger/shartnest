import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaUserAlt,
  FaShoppingBag,
  FaHome,
  FaInfoCircle,
  FaHeadset,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  const prevScrollY = useRef(0);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY.current) {
          setIsHovered(false);
        } else {
          setIsHovered(true);
        }
        prevScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={`fixed top-0 right-0 ${isHovered ? "" : "is-hovered"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button onClick={handleMenuToggle}>
          <FaBars className="text-3xl m-4 text-white" />
        </button>
      </div>
      <nav
        className={`md:hidden fixed top-0 right-0  bg-[#00483D] rounded-l-3xl text-white flex flex-col justify-center transition-all duration-300 z-20 ${
          isOpen ? "w-[120px] opacity-100" : "w-0 opacity-0"
        }`}
      >
        <a
          href="#"
          className="text-lg mb-[25px] mt-[45px]  flex justify-center  p-4 hover:text-gray-500"
        >
          <FaUserAlt className="mt-1" />
          <div className="ml-2 ">User</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[25px] mt-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaShoppingBag className="mt-1" />
          <div className="ml-2 ">Shop</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[25px] mt-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaHome className="mt-1" />
          <div className="ml-2 ">Home</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[25px] mt-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaInfoCircle className="mt-1" />
          <div className="ml-2 ">About</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[25px] mt-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaHeadset className="mt-1" />
          <div className="ml-2 ">Help</div>
        </a>
      </nav>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"
          onClick={handleMenuToggle}
        ></div>
      )}
      <nav className="hidden md:block fixed top-0  right-0  bg-[#00483D] rounded-l-3xl text-white   flex-col justify-center">
        <a
          href="#"
          className="text-lg mb-[50px] h-[45px] mt-5 flex justify-center  p-4 hover:text-gray-500"
        >
          <FaUserAlt className="mt-1" />
          <div className="ml-2 ">User</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[50px] h-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaShoppingBag className="mt-1" />
          <div className="ml-2 ">Shop</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[50px] h-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaHome className="mt-1" />
          <div className="ml-2 ">Home</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[50px] h-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaInfoCircle className="mt-1" />
          <div className="ml-2 ">About</div>
        </a>
        <a
          href="#"
          className="text-lg mb-[50px] h-[45px] flex justify-center  p-4 hover:text-gray-500"
        >
          <FaHeadset className="mt-1" />
          <div className="ml-2 ">Hỗ trợ</div>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
