import React from "react";
import slide3 from "../../assets/images/slide-3.jpg";

const EventsDetail = () => {
  return (
    <div className="event-detail">
      <header className="page-header d-flex align-items-center justify-content-center">
        <h1 className="fs4">Events Detail</h1>
      </header>
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-12 mb-md-4">
            <img src={slide3} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-8 ">
            <div className="pb-3">
              <h2>Play for the world</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
                <br />
                <br />
                <br />
                <br /> Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum ley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>

            <div className="py-3">
              <h2>Event Requirements</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum ley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-12">
                <div class="event-detail-time">
                  <div class="event-time-area">
                    <h6 class="">Event Details</h6>
                    <ul class="ps-0 mb-0 mt-4">
                      <li>
                        <span>Starting Time:</span> 8:00AM to 2:00PM
                      </li>
                      <li>
                        <span>Date:</span> 9 March, 2019
                      </li>
                      <li>
                        <span>Category:</span> Health
                      </li>
                      <li>
                        <span>Phone:</span> 666 888 0000
                      </li>
                      <li>
                        <span>Website:</span> Info@event.com
                      </li>
                      <li>
                        <span>Location:</span> 8 Street, San Marcos London D29,
                        UK
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12  mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.598915046581!2d90.39500577511436!3d23.726012978687002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e6474187cf%3A0xb3d3783755659522!2sDhaka%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1705083629425!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{border: 0}}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsDetail;
