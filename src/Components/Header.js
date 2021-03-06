import React from "react";
// import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var logos = data.training.map(function (training) {
      return (
        <li key={training.name}>
          <a href={training.url}>
            {/* <i className={network.className}></i> */}
            <img src={training.logoLink} alt="" width="100" height="100" />
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            Ekwealor Emmanuel
            {/* <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter> */}
          </h1>
          <h3>
            Frontend Developer currently undergoing HNG Internship
            {/* Based in {city}. <span>{occupation}</span>. {description}. */}
          </h3>
          <hr />
          <ul className="social">{logos}</ul>
        </div>
        <p>
        https://training.zuri.team/  {"      "}      https://hng.tech/  {"      "}
        hhttps://ingressive.org/
        </p>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
