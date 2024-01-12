import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {TfiEmail} from "react-icons/tfi";
import {ImMobile} from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../../assets/images/logo.png";

const TopNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 50; // Adjust the threshold as needed

    if (scrollY > threshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`custom-nav ${isSticky ? "sticky transform-down" : ""}`}>
      <div className="top-nav">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-area">
            <Link>
              <TfiEmail className="mb-1" />
              <span className="ms-1">dmc.charity@gmail.com</span>
            </Link>
            <Link className="ms-3">
              <ImMobile className="mb-1" />
              <span className="ms-1">+880 178984534</span>
            </Link>
          </div>
          <div className="contact-area d-none d-lg-flex">
            <Link className="ms-3">
              <FaFacebookF />
            </Link>
            <Link className="ms-3">
              <FaTwitter />
            </Link>
            <Link className="ms-3">
              <FaInstagram />
            </Link>
            <Link className="ms-3">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className={`main-nav ${isSticky ? "sticky" : ""}`}>
        <Navbar expand="lg" className="bg-body-tertiary navbar-custom bg-body ">
          <Container>
            <Link to="/" className="logo-section d-flex align-items-center">
              <img src={logo} className="img-fluid logo" alt="" />

              <div className="text-start ms-2 mt-2 company-name">
                <span className="name">Company</span> <br />
                <span className="dialogue">
                  Your Contribution can help solution{" "}
                </span>
              </div>
            </Link>

            <div aria-controls="basic-navbar-nav " className="d-flex ">
              <div className="d-flex align-items-center">
                <Navbar.Toggle />
              </div>
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto link">
                <Link className="ms-lg-3 my-lg-0 " to="/">
                  Home
                </Link>
                <Link className="ms-lg-3  my-lg-0  " to="events">
                  Events
                </Link>
                <Link className="ms-lg-3  my-lg-0  " to="about">
                  About
                </Link>
                <Link className="ms-lg-3 my-lg-0  " to="contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default TopNavbar;
