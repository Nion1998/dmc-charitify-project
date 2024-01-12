import React from "react";
import backgroundImageMission from "../../assets/images/missionbg.jpg";
import slide3 from "../../assets/images/slider-2.jpg";
const AboutPage = () => {
  return (
    <div>
      <header className="page-header d-flex align-items-center justify-content-center">
        <h1 className="fs4">About US</h1>
      </header>

      <section className="vision py-2">
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
    </div>
  );
};

export default AboutPage;
