import React from "react";
import slide3 from "../../assets/images/slide-3.jpg";
import {Link} from "react-router-dom";
const EventsPage = () => {
  return (
    <div className="event">
      <header className="page-header d-flex align-items-center justify-content-center">
        <h1>Events</h1>
      </header>
      <section className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link to="/events-detail">
              <div class="custom-card mx-auto my-3 m-lg-2 shadow">
                <img src={slide3} alt="" />
                <div class="card-content">
                  <h6 class="">First charity activity of this summer.</h6>
                  <p class="mb-0">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/events-detail">
              <div class="custom-card mx-auto my-3 m-lg-2 shadow">
                <img src={slide3} alt="" />
                <div class="card-content">
                  <h6 class="">First charity activity of this summer.</h6>
                  <p class="mb-0">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/events-detail">
              <div class="custom-card mx-auto my-3 m-lg-2 shadow">
                <img src={slide3} alt="" />
                <div class="card-content">
                  <h6 class="">First charity activity of this summer.</h6>
                  <p class="mb-0">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/events-detail">
              <div class="custom-card mx-auto my-3 m-lg-2 shadow">
                <img src={slide3} alt="" />
                <div class="card-content">
                  <h6 class="">First charity activity of this summer.</h6>
                  <p class="mb-0">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/events-detail">
              <div class="custom-card mx-auto my-3 m-lg-2 shadow">
                <img src={slide3} alt="" />
                <div class="card-content">
                  <h6 class="">First charity activity of this summer.</h6>
                  <p class="mb-0">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/events-detail">
              <div class="custom-card mx-auto my-3 m-lg-2 shadow">
                <img src={slide3} alt="" />
                <div class="card-content">
                  <h6 class="">First charity activity of this summer.</h6>
                  <p class="mb-0">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
