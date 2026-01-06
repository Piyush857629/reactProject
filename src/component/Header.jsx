 import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileNavOpen(false);
    document.body.classList.remove("mobile-nav-active");
  }, [location]);

  const toggleMobileNav = () => {
    const newStatus = !mobileNavOpen;
    setMobileNavOpen(newStatus);
    if (newStatus) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Mentor</h1>
        </Link>

        {/* Toggle Button */}
        <i
          className="mobile-nav-toggle bi bi-list"
          onClick={toggleMobileNav}
          style={{ cursor: "pointer" }}
        ></i>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/event">Events</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">
                <IoMdLogIn />
              </Link>
            </li>
            <li>
              <Link to="/SignUp">
                <FaUser />
              </Link>
            </li>
            {/* <li>
                           <Link to="/courses" className="btn-getstarted">
                Get Started
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;