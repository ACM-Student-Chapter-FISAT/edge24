import React, { useEffect, useState } from "react";
import './workshops.scss';
import { images } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";

const CardAnimations = () => {
  const [stacksTransition, setStacksTransition] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const screenHeight = window.innerHeight;
    setIsSmallScreen(screenHeight <= 3200);

    const t1 = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const t2 = setTimeout(() => {
      setStacksTransition(true);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen bg-black">
      <Loader />
    </div>
  ) : (
    isSmallScreen ? (
      <>
        {/* Small Screen JSX */}
        <div
          className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images.background})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text">WORKSHOPS</h1>
          </div>
        </div>

        <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-1">
          <section className="max-w-6xl mx-auto my-10">
            <ul className="relative h-[700px] cursor-pointer">
              {/* Card List for Small Screen */}
              <li
                className={`absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-x-[0px]" : ""}`}
              >
                <ul className="relative">
                  {/* Individual Card Items */}
                  <li
                    className={`absolute top-0 left-0 w-[250px] h-[250px] bg-blend-saturation rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-20 transform rotate-[-7deg] ${stacksTransition ? "translate-y-[340px]" : ""}`}
                  >
                    <img
                      src={images.edgerev}
                      alt="Card 2"
                      className="w-full h-auto pt-28"
                    />
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">2</h1>
                      <p className="text-sm">Stack 1</p>
                    </div>
                  </li>

                  <NavLink to='/workshops/3'
                    className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[5deg] ${stacksTransition ? "translate-y-[100px]" : ""}`}
                  >
                    <img
                      src={images.proshow}
                      alt="Card 3"
                      className="w-full h-auto"
                    />
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">3</h1>
                      <p className="text-sm">Stack 1</p>
                    </div>
                  </NavLink>
                </ul>
              </li>

              {/* Similar structure for other stacks... */}
            </ul>
          </section>
        </div>
      </>
    ) : (
      <>
        <div id="nav-bar">
          {/* Toggle Checkbox */}
          <input id="nav-toggle" type="checkbox" />

          {/* Header Section */}
          <div id="nav-header">
            <a
              id="nav-title"
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              C#<i className="fab fa-codepen"></i>DEPEN
            </a>
            <label htmlFor="nav-toggle">
              <span id="nav-toggle-burger"></span>
            </label>
            <hr />
          </div>

          {/* Content Section */}
          <div id="nav-content">
            <div className="nav-button">
              <i className="fas fa-palette"></i>
              <span>Your Work</span>
            </div>
            <div className="nav-button">
              <i className="fas fa-images"></i>
              <span>Assets</span>
            </div>
            <div className="nav-button">
              <i className="fas fa-thumbtack"></i>
              <span>Pinned Items</span>
            </div>
            <hr />
            <div className="nav-button">
              <i className="fas fa-heart"></i>
              <span>Following</span>
            </div>
            <div className="nav-button">
              <i className="fas fa-chart-line"></i>
              <span>Trending</span>
            </div>
            <div className="nav-button">
              <i className="fas fa-fire"></i>
              <span>Challenges</span>
            </div>
            <div className="nav-button">
              <i className="fas fa-magic"></i>
              <span>Spark</span>
            </div>
            <hr />
            <div className="nav-button">
              <i className="fas fa-gem"></i>
              <span>Codepen Pro</span>
            </div>
            <div id="nav-content-highlight"></div>
          </div>

          {/* Footer Toggle Checkbox */}
          <input id="nav-footer-toggle" type="checkbox" />

          {/* Footer Section */}
          <div id="nav-footer">
            <div id="nav-footer-heading">
              <div id="nav-footer-avatar">
                <img
                  src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
                  alt="User Avatar"
                />
              </div>
              <div id="nav-footer-titlebox">
                <a
                  id="nav-footer-title"
                  href="https://codepen.io/uahnbu/pens/public"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uahnbu
                </a>
                <span id="nav-footer-subtitle">Admin</span>
              </div>
              <label htmlFor="nav-footer-toggle">
                <i className="fas fa-caret-up"></i>
              </label>
            </div>
            <div id="nav-footer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        {/* Large Screen JSX */}
        <div
          className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images.background})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text">WORKSHOPS</h1>
          </div>
        </div>

        <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-1">
          <section className="max-w-6xl mx-auto my-10">
            <ul className="relative h-[700px] cursor-pointer">
              {/* Card List for Large Screen */}
              <li
                className={`absolute top-0 left-0 transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-x-[0px]" : ""}`}
              >
                <ul className="relative">
                  {/* Individual Card Items */}
                  <li
                    className={`absolute top-0 left-0 w-[250px] h-[250px] bg-blend-saturation rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-20 transform rotate-[-7deg] ${stacksTransition ? "translate-y-[340px]" : ""}`}
                  >
                    <img
                      src={images.edgerev}
                      alt="Card 2"
                      className="w-full h-auto pt-28"
                    />
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">2</h1>
                      <p className="text-sm">Stack 1</p>
                    </div>
                  </li>

                  <NavLink to='/workshops/3'
                    className={`absolute top-0 left-0 w-[250px] h-[250px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[5deg] ${stacksTransition ? "translate-y-[100px]" : ""}`}
                  >
                    <img
                      src={images.proshow}
                      alt="Card 3"
                      className="w-full h-auto"
                    />
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">3</h1>
                      <p className="text-sm">Stack 1</p>
                    </div>
                  </NavLink>
                </ul>
              </li>

              {/* Similar structure for other stacks... */}
            </ul>
          </section>
        </div>
      </>
    )
  );
};

export default CardAnimations;
