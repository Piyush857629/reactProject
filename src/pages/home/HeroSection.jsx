import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <img src="img/hero-bg.jpg" alt="" />
        <div
          className="container "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>
            Learning Today,
            <br />
            Leading Tomorrow
          </h2>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="d-flex mt-4">
            <Link to="/courses" className="btn-get-started">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection
