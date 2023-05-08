import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
