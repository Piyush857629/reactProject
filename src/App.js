// import { Route, Routes } from "react-router-dom";
// import Layout from "./layout/Layout.jsx";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// // import Courses from './pages/courses/Courses';
// import Trainers from "./pages/trainers/Trainers";
// import Event from "./pages/event/Event";
// import Pricing from "./pages/pricing/Pricing";
// import Contact from "./pages/contact/Contact";
// import Login1 from "./component/Login1";
// import SignUp1 from "./component/SignUp1";
// import Courses1 from "./pages/courses/Courses";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />}></Route>
//           <Route path="about" element={<About />}></Route>
//           <Route path="courses" element={<Courses1 />}></Route>
//           <Route path="trainers" element={<Trainers />}></Route>
//           <Route path="event" element={<Event />}></Route>
//           <Route path="pricing" element={<Pricing />}></Route>
//           <Route path="contact" element={<Contact />}></Route>
//           <Route path="login" element={<Login1 />}></Route>
//           <Route path="SignUp" element={<SignUp1 />}></Route>
//         </Route>
//       </Routes>
//       {/* <Header/> */}
//       {/* <About /> */}
//       {/* <Login/> */}
//       {/* <Signup/> */}
//     </>
//   );
// }

// export default App;
// //  <Routes>
// //           <Route path="/" element={<Layout />}>
// //             <Route path="/" element={<Home />}></Route>
// //             <Route path="reservation" element={<Reservation />}></Route>
// //             <Route path="menu" element={<Menu />}></Route>
// //       <Route path="about" element={<About />}></Route>
// //           <Route path="gallery" element={<Gallery />}></Route>
// //           </Route>
// //         </Routes>

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses1 from "./pages/courses/Courses";
import Trainers from "./pages/trainers/Trainers";
import Event from "./pages/event/Event";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";
import Login1 from "./component/Login1";
import SignUp1 from "./component/SignUp1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Index route for home */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses1 />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="event" element={<Event />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login1 />} />
        <Route path="signup" element={<SignUp1 />} />

        {/* Optional: 404 Not Found route */}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
