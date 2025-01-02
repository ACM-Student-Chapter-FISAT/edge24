import React from 'react'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import aboutimg from '../assets/stock-hero.jpg';
const About = () => {
  return (
    <div>
        <section id="about" className="about section ">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay={100}>
                  <img src={aboutimg} className="img-fluid" alt="test" />
                  
                </div>
                <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay={200}>
                  <h3>About Us</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    <li><i className="bi bi-check2-all" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                    <li><i className="bi bi-check2-all" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  </p>
                </div>
              </div>
            </div>
          </section>{/* /About Section */}
          {/* Why Us Section */}
          <section id="why-us" className="why-us section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Why Us</h2>
              <div><span>Why choose</span> <span className="description-title">Our Restaurant</span></div>
            </div>{/* End Section Title */}
            <div className="container why-items">
              <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="card-item">
                    <span>01</span>
                    <h4><a href className="stretched-link">Lorem Ipsum</a></h4>
                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                  </div>
                </div>{/* Card Item */}
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="card-item">
                    <span>02</span>
                    <h4><a href className="stretched-link">Repellat Nihil</a></h4>
                    <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                  </div>
                </div>{/* Card Item */}
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="card-item">
                    <span>03</span>
                    <h4><a href className="stretched-link">Ad ad velit qui</a></h4>
                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                  </div>
                </div>{/* Card Item */}
              </div>
            </div>
          </section>{/* /Why Us Section */}
    </div>
  )
}

export default About
