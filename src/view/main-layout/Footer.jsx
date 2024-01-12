import React from "react";
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {ImMobile} from "react-icons/im";
import {TfiEmail} from "react-icons/tfi";
import {Link} from "react-router-dom";
import {IoLocationOutline} from "react-icons/io5";
import logoLight from "../../assets/images/logo-light.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <section class="footer-area py-5">
          <div class="container">
            <div class="row gx-xl-5">
              <div class="col-12 col-lg-4 py-3 py-lg-0 footer-about">
                <img src={logoLight} class="img-fluid mb-3" alt="Logo" />

                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor.
                </p>
                <div class="d-flex gap-3 social-links">
                  <div className="contact-area d-none d-lg-flex">
                    <Link className="me-3">
                      <FaFacebookF />
                    </Link>
                    <Link className="me-3">
                      <FaTwitter />
                    </Link>
                    <Link className="me-3">
                      <FaInstagram />
                    </Link>
                    <Link className="me-3">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 py-3 py-lg-0 footer-campaign-links">
                <h4 class="mb-3 footer-heading">Recent Campaigns</h4>
                <div class="mb-3 footer-campaign-link">
                  <Link class="text-decoration-none">
                    First charity activity of this summer. -1 Year Ago
                  </Link>
                </div>
                <div class="mb-3 footer-campaign-link">
                  <Link class="text-decoration-none">
                    Big charity: build school for poor children. -2 Year Ago
                  </Link>
                </div>
                <div class="mb-3 footer-campaign-link">
                  <Link class="text-decoration-none">
                    Clean-water system for rural poor. -2 Year Ago
                  </Link>
                </div>
                <div class="mb-3 footer-campaign-link">
                  <Link class="text-decoration-none">
                    Nepal earthqueak donation campaigns. -3 Year Ago
                  </Link>
                </div>
              </div>
              <div class="col-lg-4 py-3 py-lg-0">
                <h4 class="mb-3 footer-heading">Charitify Location</h4>
                <div class="footer-address">
                  <div class="mb-3">
                    <TfiEmail className="color-y mb-1"></TfiEmail>
                    <a
                      class="text-decoration-none ms-2"
                      href="mailto:info@YourDomain.com"
                    >
                      info@YourDomain.com
                    </a>
                  </div>
                  <div class="mb-3">
                    <ImMobile className="color-y mb-1"></ImMobile>
                    <a
                      class="text-decoration-none ms-2"
                      href="tel:+(333) 052 39876"
                    >
                      +(333) 052 39876
                    </a>
                  </div>
                  <div class="mb-3">
                    <FaGlobe className="color-y mb-1"></FaGlobe>
                    <a
                      class="text-decoration-none ms-2"
                      href="Www.YourWebsite.com"
                    >
                      Www.YourWebsite.com
                    </a>
                  </div>
                  <p class="mb-3">
                    <IoLocationOutline className="color-y mb-1"></IoLocationOutline>{" "}
                    60 Grand Avenue. Central New Road 0708, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="copyright-area">
          <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
            <p class="mb-lg-0">&copy; Charitify Powered by DynamicLayers</p>

            <div class="">
              <Link class="text-decoration-none">Donation</Link>
              <Link class="text-decoration-none mx-2">Terms</Link>
              <Link class="text-decoration-none">Report Problem</Link>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
