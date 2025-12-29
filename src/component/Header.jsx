 import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

 function Header() {
   return (
     <header
       id="header"
       className="header d-flex align-items-center sticky-top"
     >
       <div className="container-fluid container-xl position-relative d-flex align-items-center ">
         <Link to="/" className="logo d-flex align-items-center me-auto">
           {/* Uncomment the line below if you also wish to use an image logo */}
           {/* <img src="assets/img/logo.png" alt=""> */}
           <h1 className="sitename">Mentor</h1>
         </Link>
         <nav id="navmenu" className="navmenu">
           {/* <button
             className="navbar-toggler border border-danger"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarsMENTOR"
             aria-controls="navbarsMENTOR"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon" />
           </button> */}
           <button
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span class="navbar-toggler-icon"></span>
           </button>
           <ul className=" ">
             <li>
               <Link to="/" className="active">
                 Home
                 <br />
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
               <Link to="Contact">Contact</Link>
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
             <li>
               <i className="mobile-nav-toggle d-xl-none bi bi-list" />
             </li>
             <li>
               <Link to="/courses" className="btn-getstarted">
                 Get Started
               </Link>
             </li>
           </ul>
         </nav>
       </div>
     </header>
   );
 }

 export default Header

 