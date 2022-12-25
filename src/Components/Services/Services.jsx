import React from "react";
import { useState } from "react";
import "./Service.css";

function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="auto services" id="services">
      <div className="about">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>
      </div>

      <div className="services_container">
        <div className="services_content">
          <div>
            <i className="bx bx-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="bx bx-right-arrow-alt services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="service_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="fa-solid fa-xmark services_modal-close"
              ></i>

              <h3 className="services_modal-title">Product Designer</h3>
              <p className="services_modal-discri">
                Service with more than 5 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services_modal-services">
                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="fa-solid fa-code services_icon"></i>
            <h3 className="services_title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="bx bx-right-arrow-alt services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="service_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="fa-solid fa-xmark services_modal-close"
              ></i>

              <h3 className="services_modal-title"> Ui/Ux Designer</h3>
              <p className="services_modal-discri">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services_modal-services">
                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="fa-solid fa-pen-to-square services_icon"></i>
            <h3 className="services_title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <i className="bx bx-right-arrow-alt services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="service_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="fa-solid fa-xmark services_modal-close"
              ></i>

              <h3 className="services_modal-title"> Visual Designer</h3>
              <p className="services_modal-discri">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services_modal-services">
                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="bx bx-check-circle service_modal-icon"></i>
                  <p className="service_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
