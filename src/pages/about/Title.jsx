import React from 'react'
import { Link } from 'react-router-dom';

function Title() {
  return (
    <>
      <div className="page-title">
        <div className="heading">
          {/* <img src="img/hero-bg.jpg" alt="" /> */}
          <div className="container" data-aos="fade">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>
                  About Us
                  <br />
                </h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">
                About Us
                <br />
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Title
