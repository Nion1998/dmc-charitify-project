import React, {useEffect, useState} from "react";
import TopNavbar from "./TopNavbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {} from "../../assets/css/mainLayout.css";
import {Button} from "react-bootstrap";
import {FaChevronUp} from "react-icons/fa";

const MainLayout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    // Show the scroll-to-top button after scrolling 200px
    setShowScrollButton(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="main-layout ">
      <div className="nav-area  ">
        <TopNavbar></TopNavbar>
      </div>
      <div className="outlet-area">
        <Outlet></Outlet>
      </div>

      <div className="footer-area">
        <Footer></Footer>
      </div>

      <div>
        <Button
          className={showScrollButton ? "to-top active" : "to-top"}
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </Button>
      </div>
    </div>
  );
};

export default MainLayout;
