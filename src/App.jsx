import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import Nav from "./Nav";
function App() {
  // const [About, setAbout] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/test")
  //     .then(function (response) {
  //       console.log(response);
  //       setAbout(response.data);
  //       //alert(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <>
      <Nav />
      <div className="container-fluid p-0">
        {/* <!--====================================================
                        ABOUT
        ======================================================--> */}
        <section
          className="resume-section p-3 p-lg-5 d-flex d-column"
          id="about"
        >
          <div className="my-auto">
            <h1 className="mb-2 text-white">
              Channy <span className="text-primary">Samnang</span>
            </h1>
            <div className="subheading mb-2">Backend Developer</div>
            {/* <p className="mb-4" style="max-width: 500px;" >Des</p> */}
            <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://t.me/ChannySamnang" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-telegram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://gitlab.com/samnang2k" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-gitlab fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* <!--====================================================
                        Educational
        ======================================================--> */}
        <section className="resume-section p-3 p-lg-5 " id="experience">
          <div className="row my-auto">
            <div className="col-12">
              <h2 className="  text-center">Educational Background</h2>
              <div className="mb-5 heading-border"></div>
            </div>
            <div className="resume-item col-md-6 col-sm-12 ">
              <div
                className="card mx-0 p-4 mb-5"
                classNameName="card mx-0"
                style={{
                  borderColor: "#17a2b8",
                  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.21)",
                  padding: "16px", // p-4 equivalent
                  marginBottom: "30px", // mb-5 equivalent
                }}
              >
                <div className=" resume-content mr-auto">
                  <h4 className="mb-3">
                    <i className="fa fa-graduation-cap mr-3 text-info"></i>{" "}
                    Bachelor of Software Engineering (In Progress)
                  </h4>
                  <p>
                    BELTEI International University, Phnom Penh, Cambodia
                    Faculty of Information Technology and Science Year 3,
                    Semester 1 Expected Graduation: November 2026
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">2023-01-10 - 2026-11-28</span>
                </div>
              </div>
            </div>
            <div className="resume-item col-md-6 col-sm-12 ">
              <div
                className="card mx-0 p-4 mb-5"
                classNameName="card mx-0"
                style={{
                  borderColor: "#17a2b8",
                  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.21)",
                  padding: "16px", // p-4 equivalent
                  marginBottom: "30px", // mb-5 equivalent
                }}
              >
                <div className=" resume-content mr-auto">
                  <h4 className="mb-3">
                    <i className="fa fa-graduation-cap mr-3 text-info"></i>
                    Lecturer's assistant
                  </h4>
                  <p>
                    National Institute of Entrepreneurship and Innovation, Phnom
                    Penh, Cambodia Faculty of Foreign Languages Year 2, Semester
                    2 Expected Graduation: December 2024
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span class="text-primary">2023-03-13 - 2024-12-27</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====================================================
                        Experience
        ======================================================--> */}
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="awards"
        >
          <div class="row my-auto">
            <div class="col-12">
              <h2 class="  text-center">Experience</h2>
              <div class="mb-5 heading-border"></div>
            </div>
            <div class="main-award" id="award-box">
              {/* Start */}
              <div class="award">
                <div class="award-icon"></div>
                <div class="award-content">
                  <span class="date">Lecturer's assistant</span>
                  <h6>2 Months</h6>
                  <p class="description">
                    Identified and resolved code errors in students' assignments
                    and projects, Provided technical support to create and
                    maintain a productive learning environment, Assisted
                    students with programming concepts and debugging techniques
                    during lab sessions.
                  </p>
                </div>
              </div>
              <br />
              {/* //End */}
            </div>
          </div>
        </section>
        {/* <!--====================================================
                        SKILLS
        ======================================================-->        */}
        <section class=" d-flex flex-column" id="skills">
          <div class="p-lg-5 p-3 skill-cover">
            <h3 class="text-center text-white">Coding Skills</h3>
            <div class="row text-center my-auto ">
              <div class="col-md-3 col-sm-6">
                <div class="skill-item">
                  <i class="fa fa-javascript fa-5x">JS</i>
                  <h2>
                    <span class="counter"> 80 </span>
                    <span>%</span>
                  </h2>
                  <p>Javascript</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="skill-item">
                  <i class="fa fa-html5 fa-5x"></i>
                  <h2>
                    <span class="counter"> 90 </span>
                    <span>%</span>
                  </h2>
                  <p>ReactJs</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="skill-item">
                  <i class="fa fa-globe fa-5x"></i>
                  <h2>
                    <span class="counter"> 90 </span>
                    <span>%</span>
                  </h2>
                  <p>PHP</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="skill-item">
                  <i class="fa fa-code fa-5x"></i>
                  <h2>
                    <span class="counter"> 90 </span>
                    <span>%</span>
                  </h2>
                  <p>Laravel</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="skill-item">
                  <i class="fa fa-C# fa-5x">C#</i>
                  <h2>
                    <span class="counter"> 70 </span>
                    <span>%</span>
                  </h2>
                  <p>.NET Framework</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="skill-item">
                  <i class="fa fa-git fa-5x"></i>
                  <h2>
                    <span class="counter"> 90 </span>
                    <span>%</span>
                  </h2>
                  <p>Version Control System</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====================================================
                        PORTFOLIO
        ======================================================-->       */}
        <section
          class="resume-section p-3 p-lg-5 d-flex flex-column"
          id="portfolio"
        >
          <div class="row my-auto">
            <div class="col-12">
              <h2 class="  text-center">Portfolio</h2>
              <div class="mb-5 heading-border"></div>
            </div>
          </div>
          <div class="row my-auto">
            {/* StypeShop */}
            <div class="col-sm-4 portfolio-item filter consulting">
              <a
                class="portfolio-link"
                href="#portfolioModal6"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid img-thumbnail"
                  src="img/portfolio/styleshop.jpg"
                  alt="styleshop"
                />
              </a>
            </div>
            {/* SKAUTO */}
            <div class="col-sm-4 portfolio-item filter marketing">
              <a
                class="portfolio-link"
                href="#portfolioModal5"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid img-thumbnail"
                  src="img/portfolio/skauto.png"
                  alt=""
                />
              </a>
            </div>
            {/* Camflix */}
            <div class="col-sm-4 portfolio-item filter consulting">
              <a
                class="portfolio-link"
                href="#portfolioModal7"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid img-thumbnail"
                  src="img/portfolio/camflix.jpg"
                  alt="Camflix"
                />
              </a>
            </div>
            {/* Sams */}
            <div class="col-sm-4 portfolio-item filter finance">
              <a
                class="portfolio-link"
                href="#portfolioModal4"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid img-thumbnail"
                  src="img/portfolio/sams.png"
                  alt=""
                />
              </a>
            </div>
            {/* BelteiTour */}
            <div class="col-sm-4 portfolio-item filter consulting">
              <a
                class="portfolio-link"
                href="#portfolioModal8"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid img-thumbnail"
                  src="img/portfolio/belteitour.jpg"
                  alt="belteitour"
                />
              </a>
            </div>
            {/* KlaKlouk */}
            <div class="col-sm-4 portfolio-item filter finance">
              <a
                class="portfolio-link"
                href="#portfolioModal9"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid img-thumbnail"
                  src="img/portfolio/klaklouk.png"
                  alt="klaklouk"
                />
              </a>
            </div>
            {/*
            <div class="col-sm-4 portfolio-item filter marketing">
              <a
                class="portfolio-link"
                href="#portfolioModal1"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid img-thumbnail" src="img/portfolio/p-1.jpg" alt="" />
              </a>
            </div>
            <div class="col-sm-4 portfolio-item filter marketing">
              <a
                class="portfolio-link"
                href="#portfolioModal2"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/p-2.jpg" alt="" />
              </a>
            </div>
            <div class="col-sm-4 portfolio-item filter finance">
              <a
                class="portfolio-link"
                href="#portfolioModal3"
                data-toggle="modal"
              >
                <div class="caption-port">
                  <div class="caption-port-content">
                    <i class="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/p-3.jpg" alt="" />
              </a>
            </div> */}
          </div>
        </section>

        {/* <!--====================================================
                          CONTACT
        ======================================================-->        */}
        <section class="contact-color resume-section p-3 p-lg-5 d-flex flex-column">
          <div class="row my-auto" id="contact">
            <div class="col-md-8">
              <div class="contact-cont">
                <h3>CONTACT Us</h3>
                <div class="heading-border-light"></div>
              </div>
              <div class="row con-form">
                <div class="col-md-12">
                  <input
                    type="text"
                    name="full-name"
                    placeholder="Full Name"
                    class="form-control"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    class="form-control"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    class="form-control"
                  />
                </div>
                <div class="col-md-12">
                  <textarea name="" id=""></textarea>
                </div>
                <div class="col-md-12 sub-but">
                  <button class="btn btn-general btn-white" role="button">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 mt-5">
              <div class="contact-cont2">
                <div class="contact-add contact-box-desc">
                  <h3>
                    <i class="fa fa-map-marker cl-atlantis fa-2x"></i> Address
                  </h3>
                  <p>
                    Samraong Kraom, Phnom Penh <br />
                  </p>
                </div>
                <div class="contact-phone contact-side-desc contact-box-desc">
                  <h3>
                    <i class="fa fa-phone cl-atlantis fa-2x"></i> Phone
                  </h3>
                  <p>+855 96 44 22 124</p>
                </div>
                <div class="contact-mail contact-side-desc contact-box-desc">
                  <h3>
                    <i class="fa fa-envelope-o cl-atlantis fa-2x"></i> Email
                  </h3>
                  <address class="address-details-f">
                    Email:{" "}
                    <a href="mailto:samnang2k4k@gmal.com" class="">
                      Samnang2k4k@gmal.com
                    </a>
                  </address>
                  <ul
                    className="list-inline social-icon-f top-data"
                    style={{ listStyleType: "none", padding: 0 }}
                  >
                    <li style={{ display: "inline", marginRight: "10px" }}>
                      <a
                        href="https://t.me/ChannySamnang"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa top-social fa-telegram"
                          style={{ color: "#4267b2", borderColor: "#4267b2" }}
                        />
                      </a>
                    </li>
                    <li style={{ display: "inline", marginRight: "10px" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <i
                          className="fa top-social fa-instagram"
                          style={{ color: "#4AB3F4", borderColor: "#4AB3F4" }}
                        />
                      </a>
                    </li>
                    <li style={{ display: "inline" }}>
                      <a
                        href="mailto:samnang2k4k@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa top-social fa-google-plus"
                          style={{ color: "#e24343", borderColor: "#e24343" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!--====================================================
                    PORTFOLIO MODALS
      ======================================================--> */}
      {/* SAMS */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal4"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="modal-body">
                  <div class="title-bar">
                    <div class="col-md-12">
                      <h2 class="text-center">Student Achievement MS</h2>
                      <div class="heading-border"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/sams_2.png"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/sams.png"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/sams_3.png"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/sams_4.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        class="btn btn-sm btn-danger"
                        type="button"
                        data-dismiss="modal"
                      >
                        <i class="fa fa-times"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SKAUTO */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal5"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="modal-body">
                  <div class="title-bar">
                    <div class="col-md-12">
                      <h2 class="text-center">Car Buy and Sell MS</h2>
                      <div class="heading-border"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/skauto.png"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/skauto_2.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        class="btn btn-sm btn-danger"
                        type="button"
                        data-dismiss="modal"
                      >
                        <i class="fa fa-times"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* StyleShop */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal6"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="modal-body">
                  <div class="title-bar">
                    <div class="col-md-12">
                      <h2 class="text-center">StyleShop</h2>
                      <div class="heading-border"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/styleshop.jpg"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/styleshop_2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        class="btn btn-sm btn-danger"
                        type="button"
                        data-dismiss="modal"
                      >
                        <i class="fa fa-times"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Camflix */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal7"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="modal-body">
                  <div class="title-bar">
                    <div class="col-md-12">
                      <h2 class="text-center">Camflix</h2>
                      <div class="heading-border"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/camflix_2.png"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail img-centere/d"
                        src="img/portfolio/camflix.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        class="btn btn-sm btn-danger"
                        type="button"
                        data-dismiss="modal"
                      >
                        <i class="fa fa-times"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Belteitour */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal8"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="modal-body">
                  <div class="title-bar">
                    <div class="col-md-12">
                      <h2 class="text-center">BELTEI Tour and Travel</h2>
                      <div class="heading-border"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <img
                        class="img-fluid img-thumbnail"
                        src="img/portfolio/belteitour.jpg"
                        alt=""
                      />
                    </div>
                    <div class="col-md-6">
                      <button
                        class="btn btn-sm btn-danger"
                        type="button"
                        data-dismiss="modal"
                      >
                        <i class="fa fa-times"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Klaklouk */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal9"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="modal-body">
                  <div className="title-bar">
                    <div className="col-md-12">
                      <h2 className="text-center">Kla Klork Game</h2>
                      <div className="heading-border"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="img-fluid img-thumbnail"
                        src="img/portfolio/klaklouk.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 float-end">
                      <button
                        class="btn btn-sm btn-danger"
                        type="button"
                        data-dismiss="modal"
                      >
                        <i class="fa fa-times"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
