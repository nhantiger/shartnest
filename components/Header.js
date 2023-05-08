import React, { useState, useRef } from "react";
import { FaFacebookSquare, FaGoogle, FaSistrix } from "react-icons/fa";

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef();

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowInput(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setShowInput(false);
    }
  };

  return (
    <header
      className="container mx-auto flex flex-wrap items-center justify-between bg-gray-300"
      onClick={handleClickOutside}
    >
      <div className="flex  items-center m-4 md:text-2xl text-2xl font-serif w-full md:w-auto">
        <h1 className="flex">
          <div className="text-red-600">Share</div>
          <div className="text-green-700">Nest</div>
        </h1>
      </div>
      <div className={`w-full md:w-auto `} ref={inputRef}>
        <div className={`hidden sm:flex items-center m-4`}>
          <input
            type="text"
            placeholder="Search..."
            className="w-[300px] sm:w-[600px] border-0 border-b border-slate-400 py-3 px-5 outline-none bg-transparent"
          />

          <button className="h-[50px] py-2 px-4 ml-4" type="submit">
            <FaSistrix className="h-[40px] w-[50px]" />
          </button>
          <div className="hidden sm:flex space-x-4 m-4 ml-20">
            <FaFacebookSquare className="h-[30px] w-[30px]" />
            <FaGoogle className="h-[30px] w-[30px]" />
          </div>
        </div>
        <div className="sm:hidden flex justify-between items-center m-4">
          {showInput ? (
            <>
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-0 border-b border-slate-400 py-3 px-5 outline-none bg-transparent"
                onKeyPress={handleKeyPress}
              />
              <button
                className="h-[50px] py-2 px-4 ml-4"
                type="submit"
                onClick={toggleInput}
              >
                <FaSistrix className="md:h-[30px] md:w-[30px] h-[25px] w-[25px]" />
              </button>
            </>
          ) : (
            <div className="flex space-x-4">
              <button className="text-xl" onClick={toggleInput}>
                <FaSistrix className="md:h-[30px] md:w-[30px] h-[25px] w-[25px] text-[#00483D] " />
              </button >
              <FaFacebookSquare className="h-[30px] w-[30px] text-[#00483D]  " />
              <FaGoogle className="h-[30px] w-[30px]   text-[#00483D] " />
            </div>
          )}
        </div>
      </div>
      <div className="flex space-x-4 m-4"></div>
    </header>
  );
};

export default Header;  
