import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import img from "./davis.png";
import "./App.css";

function App() {
  return (
    <section className="text-white">
      <div className="md:m-36 mt-12 md:flex">
        <div>
          <header>
            <div>
              <h1 className="font-sans md:text-6xl text-5xl md:text-left text-center">
                David Oluwafemi
              </h1>
              <h2 className="md:text-4xl md:text-left text-center text-3xl font-mono tracking-widest pl-4">
                Fullstack Engineer
              </h2>
            </div>
          </header>
          <main>
            <nav className="my-12">
              <ul className="md:text-left text-center text-xl md:mx-36">
                <li className="mb-4">
                  <Link to="/home">
                    <button>Home</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/skills">
                    <button>Skills</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/projects">
                    <button>Projects</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about">
                    <button>About</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact">
                    <button>Contact Me</button>
                  </Link>
                </li>
              </ul>
            </nav>
          </main>
        </div>
        <div>
          <img
            src={img}
            className="md:absolute lg:ml-72 lg:-mt-24 lg:max-w-lg md:max-w-sm lg:relative max-w-md"
          />
        </div>
      </div>
      <footer className="flex gap-8 justify-center">
        <div>Git</div>
        <div>Link</div>
        <div>Tweet</div>
        <div>Gmail</div>
      </footer>
    </section>
  );
}

export default App;
