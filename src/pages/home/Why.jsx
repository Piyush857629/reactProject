function Why() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="why-box"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              <h3>Why Choose Our Products?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="more-btn"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <span>Learn More</span>
                  <i className="bi bi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Why Box */}
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="row gy-4">
              <div className="col-xl-4">
                <div
                  className="icon-box d-flex flex-column justify-content-center align-items-center"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <i className="bi bi-clipboard-data" />
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-xl-4">
                <div
                  className="icon-box d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <i className="bi bi-gem" />
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-xl-4">
                <div
                  className="icon-box d-flex flex-column justify-content-center align-items-center"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <i className="bi bi-inboxes" />
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
