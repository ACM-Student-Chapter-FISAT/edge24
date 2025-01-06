import React from "react";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import aboutimg from "../assets/stock-hero.jpg";
import aboutimg2 from "../assets/stock-hero2.jpg";
import aboutimg3 from "../assets/stock-hero3.jpg";
const About = () => {
  return (
    <div>
      <section id="about" className="about section ">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 position-relative align-self-start"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={aboutimg} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={aboutimg2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={aboutimg3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h3>About Edge+</h3>

              <p className="lh-base fs-6">
                Edge+ stands as the flagship event hosted by the ACM student
                chapter at FISAT, for the past 3 years offering valuable
                opportunities for{" "}
                <strong style={{ color: "#fed104" }}>
                  learning, development, and personal growth.
                </strong>{" "}
                The event provides an exceptional platform for enhancing
                technical knowledge and serves as an opportunity to inspire and
                mold young minds.
              </p>
              {/* <ul>
                    <li><i className="bi bi-check2-all" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul> */}
              <p className="lh-base fs-6">
                Participating in Edge+ is an invaluable opportunity for
                learning, personal growth, and networking. It provides{" "}
                <strong style={{ color: "#fed104" }}>
                  exposure to emerging technologies,{" "}
                </strong>
                <strong style={{ color: "#cba703" }}>
                  inspires with industry leaders,
                </strong>
                <strong style={{ color: "#ffd201" }}>
                  and offers the chance to kickstart your career.
                </strong>{" "}
                Additionally, it's a fun and engaging experience, making it a
                must for anyone looking to advance in the tech world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
      {/* Why Us Section */}
      <section id="why-us" className="why-us section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Why EDGE+ 4.0</h2>
          
        </div>
        {/* End Section Title */}
        <div className="container why-items">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="card-item">
                <span>01</span>
                <h4>
                  <a href className="stretched-link">
                    WORKSHOPS 
                  </a>
                </h4>
                <p>
                Hands-on learning and practical skills in various tech-related subjects, helping participants gain in-depth knowledge and expertise.
                </p>
              </div>
            </div>
            {/* Card Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="card-item">
                <span>02</span>
                <h4>
                  <a href className="stretched-link">
                    CODING COMPS
                  </a>
                </h4>
                <p>
                Competitive coding event where participants can showcase their programming prowess, solving challenging problems and vying for recognition and prizes.
                </p>
              </div>
            </div>
            {/* Card Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="card-item">
                <span>03</span>
                <h4>
                  <a href className="stretched-link">
                    PRO SHOW
                  </a>
                </h4>
                <p>
                Exhilarating pro show, featuring the FMC band, dynamic dance performances, and a high-energy DJ show, ensuring a night of entertainment and fun.
                </p>
              </div>
            </div>
            {/* Card Item */}
          </div>
        </div>
      </section>
      {/* /Why Us Section */}
    </div>
  );
};

export default About;
