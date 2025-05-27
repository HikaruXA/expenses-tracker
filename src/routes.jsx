import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingLayout>
            <Home />
          </LandingLayout>
        }
      />
      <Route
        path="/about"
        element={
          <LandingLayout>
            <About />
          </LandingLayout>
        }
      />
      <Route
        path="/services"
        element={
          <LandingLayout>
            <Services />
          </LandingLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
