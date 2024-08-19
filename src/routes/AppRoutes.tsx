import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import Contact from "../pages/Contact/contact";
import Login from "../pages/Login/login";
import WithLayout from "./WithLayout";
import ClientRequest from "../pages/Client-Request/client-request";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <WithLayout>
            <Home />
          </WithLayout>
        }
      />
      <Route
        path="/about"
        element={
          <WithLayout>
            <About />
          </WithLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <WithLayout>
            <Contact />
          </WithLayout>
        }
      />
      <Route
        path="/client-request"
        element={
          <WithLayout>
            <ClientRequest />
          </WithLayout>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
