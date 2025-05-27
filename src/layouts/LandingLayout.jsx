import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const LandingLayout = ({ children }) => {
  return (
    <div className="landing-layout">
      <Navbar logo={<p>RFC</p>} links={navLinks} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default LandingLayout;
