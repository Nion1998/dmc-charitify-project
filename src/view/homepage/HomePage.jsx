import React, {useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slide1 from "../../assets/images/slider-1.jpg";
import slide2 from "../../assets/images/slider-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import doctor from "../../assets/images/411113721_342345112058818_1895852726679187839_n.png";
import sponsor from "../../assets/images/sponsor-5.png";
import {TypeAnimation} from "react-type-animation";
import {Button, Collapse} from "react-bootstrap";
import backgroundImage from "../../assets/images/slider-1.jpg";
import backgroundImageMission from "../../assets/images/missionbg.jpg";
import {FaDollarSign, FaRegUserCircle} from "react-icons/fa";
import {FaChildren} from "react-icons/fa6";
import {TiMessages} from "react-icons/ti";
import {Link} from "react-router-dom";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const options = {
    slideBy: 1,
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    slideTransition: "ease-in-out", // Use your preferred easing function
    autoplayTimeout: 7000,
    autoplaySpeed: 3000,

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
    },
  };
  const options2 = {
    slideBy: 1,
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    slideTransition: "ease-in-out", // Use your preferred easing function
    autoplayTimeout: 7000,
    autoplaySpeed: 3000,

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
      1500: {
        items: 4,
        nav: true,
      },
    },
  };

  return (
    <div>
      {/* Slide section */}
      <section className="slider-area ">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item position-relative">
            <div className="custom-slider ">
              <img src={slide1} className="img-fluid" alt="" />
            </div>
            <div className="slide-text position-absolute top-50 start-50 translate-middle text-center">
              <p className="slide-in-top fs-5 join">Join us Today</p>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Give a little. Change a lot.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={40}
                style={{display: "inline-block"}}
                repeat={Infinity}
              />
              <p className="slide-in-bottom m-auto description">
                Help today because tomorrow you may be the one who needs
                helping! Forget what you can get and see what you can give.
              </p>
            </div>
          </div>
          <div className="item position-relative">
            <div className="custom-slider ">
              <img src={slide2} className="img-fluid" alt="" />
            </div>
            <div className="slide-text position-absolute top-50 start-50 translate-middle text-center">
              <p className="slide-in-top fs-5 join">Join us Today</p>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Give a little. Change a lot.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={40}
                style={{display: "inline-block"}}
                repeat={Infinity}
              />
              <p className="slide-in-bottom m-auto description">
                Help today because tomorrow you may be the one who needs
                helping! Forget what you can get and see what you can give.
              </p>
            </div>
          </div>
          <div className="item position-relative">
            <div className="custom-slider ">
              <img src={slide3} className="img-fluid" alt="" />
            </div>
            <div className="slide-text position-absolute top-50 start-50 translate-middle text-center">
              <p className="slide-in-top fs-5 join">Join us Today</p>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Give a little. Change a lot.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={40}
                style={{display: "inline-block"}}
                repeat={Infinity}
              />
              <p className="slide-in-bottom m-auto description">
                Help today because tomorrow you may be the one who needs
                helping! Forget what you can get and see what you can give.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </section>
      {/* Mission vision section */}
      <section
        className="vision py-2"
        style={{
          backgroundImage: `url(${backgroundImageMission})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <div className="container py-3 py-lg-5">
          <div className="row  pb-4">
            <div className="col-12 col-lg-5">
              <img src={slide3} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-lg-7 mt-4 mt-lg-0 px-4  ">
              <div className="section-title   mb-4">
                <h2>Our Mission & Vision</h2>
              </div>

              <p className="text-center text-md-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dicta sint non! Facilis nisi officiis doloremque
                consequuntur, vero nostrum, sequi fuga perspiciatis a dolorem
                asperiores deserunt odio ut provident quisquam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Delectus dicta sint
                non! Facilis nisi officiis doloremque consequuntur, vero
                nostrum, sequi fuga perspiciatis a dolorem asperiores deserunt
                odio ut provident quisquam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Donate section */}
      <section
        className="py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <div className="container donate-section d-block  d-lg-flex justify-content-around align-items-center ">
          <div className="text-center text-lg-start">
            <h2>Ready to donate</h2>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
          <div className="d-flex ">
            <Button
              className="m-auto btn-warning"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Donate
            </Button>
          </div>
        </div>

        <Collapse in={open}>
          <div className="container mt-3" id="example-collapse-text">
            <div className="donate-info-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-5">
                    <h3>How Mouch Would You Like To Donate ?</h3>
                    <div>
                      <button className="btn btn-light me-2">10$</button>
                      <button className="btn btn-light me-2">25$</button>
                      <button className="btn btn-light me-2">50$</button>
                      <button className="btn btn-light me-2">100$</button>
                      <button className="btn btn-light me-2">Customs</button>
                    </div>
                  </div>
                  <div className="row">
                    <h3>Personal Info</h3>
                    <div className="col-lg-6">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Full Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="your full name "
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Phone Number
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="your phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 position-relative ">
                  <h3>Select Payment Method</h3>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label text-light"
                      for="flexRadioDefault1"
                    >
                      Bkash
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      class="form-check-label text-light"
                      for="flexRadioDefault2"
                    >
                      Nagad
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      checked
                    />
                    <label
                      class="form-check-label text-light"
                      for="flexRadioDefault3"
                    >
                      Bank Transfer
                    </label>
                  </div>
                  <button className="position-absolute bottom-0 end-0 btn btn-warning w-25">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </section>
      {/*Recent Events  */}
      <section
        className=" py-5"
        style={{
          backgroundImage: `url(${backgroundImageMission})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <div className="section-title text-center mb-4">
          <h2>Recent Events</h2>
        </div>
        <div className="container gap-4  d-block d-lg-flex align-items-center justify-content-center">
          <Link to="/events-detail">
            <div class="custom-card mx-auto my-3 m-lg-2 shadow">
              <img src={slide3} alt="" />
              <div class="card-content">
                <h6 class="">First charity activity of this summer.</h6>
                <p class="mb-0">
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
              </div>
            </div>
          </Link>
          <Link to="/events-detail">
            <div class="custom-card mx-auto my-3 m-lg-2 shadow">
              <img src={slide3} alt="" />
              <div class="card-content">
                <h6 class="">First charity activity of this summer.</h6>
                <p class="mb-0">
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
              </div>
            </div>
          </Link>
          <Link to="/events-detail">
            <div class="custom-card mx-auto my-3 m-lg-2 shadow">
              <img src={slide3} alt="" />
              <div class="card-content">
                <h6 class="">First charity activity of this summer.</h6>
                <p class="mb-0">
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/*work-info */}
      <section
        class="work-info-area "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <div class="area-backgrond">
          <div class="area-overlay"></div>
          <div class="work-info-content container">
            <div class="row gx-0 gy-5 gy-lg-0">
              {/* <div class="col-lg-3 col-sm-6">
                <div class="work-info">
                  <span>
                    <FaDollarSign />
                  </span>
                  <h6 class="my-3 number-count">85389</h6>
                  <p class="mb-0">Money Donated</p>
                </div>
              </div> */}
              <div class="col-lg-4 col-sm-6">
                <div class="work-info">
                  <span>
                    <FaRegUserCircle />
                  </span>
                  <h6 class="my-3 number-count">10569</h6>
                  <p class="mb-0">Volunteer Around The World</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="work-info">
                  <span>
                    <FaChildren />
                  </span>
                  <h6 class="my-3 number-count">438</h6>
                  <p class="mb-0">Kids We Helped</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="work-info">
                  <span>
                    <TiMessages />
                  </span>
                  <h6 class="my-3 number-count">569</h6>
                  <p class="mb-0">Positive Feedbacks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Members */}
      <section
        className="py-5"
        style={{
          backgroundImage: `url(${backgroundImageMission})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <div className="container">
          <OwlCarousel className="owl-theme" {...options2}>
            <div className="item m-3 ">
              <div class="text-center p-3 custom-card-two">
                <img src={doctor} className="my-3 mx-auto" alt="" />
                <h5 class="">Angelina Rose</h5>
                <h6 class="">Doctor</h6>
                <p class="mb-0 pb-3">
                  MBBS, FCPS (OBGYN) Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quibusdam, similique.
                </p>
              </div>
            </div>
            <div className="item m-3 ">
              <div class="text-center p-3 custom-card-two">
                <img src={doctor} className="my-3 mx-auto" alt="" />
                <h5 class="">Angelina Rose</h5>
                <h6 class="">Doctor</h6>
                <p class="mb-0 pb-3">
                  MBBS, FCPS (OBGYN) Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quibusdam, similique.
                </p>
              </div>
            </div>
            <div className="item m-3 ">
              <div class="text-center p-3 custom-card-two">
                <img src={doctor} className="my-3 mx-auto" alt="" />
                <h5 class="">Angelina Rose</h5>
                <h6 class="">Doctor</h6>
                <p class="mb-0 pb-3">
                  MBBS, FCPS (OBGYN) Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quibusdam, similique.
                </p>
              </div>
            </div>
            <div className="item m-3 ">
              <div class="text-center p-3 custom-card-two">
                <img src={doctor} className="my-3 mx-auto" alt="" />
                <h5 class="">Angelina Rose</h5>
                <h6 class="">Doctor</h6>
                <p class="mb-0 pb-3">
                  MBBS, FCPS (OBGYN) Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quibusdam, similique.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* company */}
      <section className="sponsor py-3 py-lg-5">
        <div className=" container d-flex align-items-center justify-content-around">
          <img src={sponsor} className="img-fluid" alt="" />
          <img src={sponsor} className="img-fluid" alt="" />
          <img src={sponsor} className="img-fluid" alt="" />
          <img src={sponsor} className="img-fluid" alt="" />
          <img src={sponsor} className="img-fluid" alt="" />
          <img src={sponsor} className="img-fluid" alt="" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
