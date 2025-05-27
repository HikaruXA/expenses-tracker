import React from "react";
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

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
    </Routes>
  );
};

export default AppRoutes;
