import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Just practicing redirection, path '/home' is no necessary */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/abouts" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
