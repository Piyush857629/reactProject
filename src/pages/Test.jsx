import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      img: "img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "CEO & Founder",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      img: "img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      img: "img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      img: "img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      img: "img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      role: "Entrepreneur",
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title">
        <h2>Testimonials</h2>
        <p>What are they saying</p>
      </div>

      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((tst, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img
                    src={tst.img}
                    className="testimonial-img"
                    alt={tst.name}
                  />
                  <h3>{tst.name}</h3>
                  <h4>{tst.role}</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    <span>{tst.text}</span>
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
