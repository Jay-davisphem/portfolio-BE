import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import img from "./davis.png";
import "./App.css";
import NavLink from "./components/NavLink";
function App({ hideLoader }) {
  useEffect(() => hideLoader());
  return (
    <section>
      <div className="md:m-36 mt-12 md:flex">
        <div>
          <header>
            <div>
              <h1 className="font-sans md:text-6xl text-4xl md:text-left text-center">
                David Oluwafemi
              </h1>
              <h2 className="md:text-4xl md:text-left text-center text-2xl font-mono tracking-widest pl-4">
                Fullstack Engineer
              </h2>
            </div>
          </header>
          <section>
            <nav className="my-12">
              <ul className="md:text-left text-center text-xl md:mx-36">
                <NavLink sty="mb-4" name="Home" />
                <NavLink sty="mb-4" name="Skills" />
                <NavLink sty="mb-4" name="Projects" />
                <NavLink sty="mb-4" name="About" />
                <NavLink sty="mb-4" name="Contact Me" />
              </ul>
            </nav>
          </section>
        </div>
        <div>
          <img
            src={img}
            className="md:absolute lg:ml-72 lg:-mt-24 max-w-xs lg:max-w-3xl md:max-w-md lg:relative max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
