import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Footer from "./components/Footer";
import "./index.css";

const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <main className="text-white">
          <BrowserRouter>
            <Routes>
              {/* Just practicing redirection, path '/home' is no necessary */}
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route
                path="/home"
                element={
                  <App showLoader={showLoader} hideLoader={hideLoader} />
                }
              />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </main>
      </React.StrictMode>
    ),
  10000
);
