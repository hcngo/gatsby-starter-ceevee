import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Testimonials</h1>
          <ul>
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                    TO BE UPDATED.
                  </p>
                  <cite></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    TO BE UPDATED.
                  </p>
                  <cite></cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
        {}
      </div>
    </div>
  </section>
);

export default Testimonials;
