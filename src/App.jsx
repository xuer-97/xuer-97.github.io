import React, { useState } from "react";
import "./App.css";
import logo from "./img/logo.jpg";
import profile from "./img/profile.jpg";
import profile2 from "./img/profile2.jpg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button id="nav-toggle" aria-label="toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                My services
              </a>
            </li>
            <li className="nav-item">
              <a href="#aboutme" className="nav-link">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a href="#mywork" className="nav-link">
                My work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1 className="section-title section-title_intro">
          Hello, I am <strong>Xuer</strong>
        </h1>
        <p className="section-subtitle section-subtitle_accent">Programmer</p>
        <img src={profile} alt="" />
      </section>

      <section id="services">
        <h2 className="section-title">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Design + Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="service">
            <h3>E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="service">
            <h3>Technical Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <a href="#mywork">see my work</a>
      </section>

      <section id="aboutme">
        <h2 className="section-title">Who I am</h2>
        <p className="section-subtitle section-subtitle_accent">
          Lorem ipsum dolor sit amet
        </p>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={profile2} alt="" />
      </section>

      <section id="mywork">
        <h2 className="section-title">My work</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="portfolio">
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
      </section>

      <footer>
        <a href="mailto:xuer_97@outlook.com">xuer_97@outlook.com</a>
        <ul className="social">
          <li>
            <a href="#">github</a>
          </li>
          <li>
            <a href="https://discordapp.com/users/887574262662176773"></a>
            @xuer_97
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
