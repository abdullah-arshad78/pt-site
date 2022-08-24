import React from "react";
import "./Testimonials.scss";
import Testimonial from "./Testimonial";
import { testimonialUsers } from "../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const testimonialList = testimonialUsers.map((testimonial) => (
    <Testimonial key={testimonial.id} {...testimonial} />
  ));
  return (
    <div className="testimonials" id="testimonials">
      <h2 className="testimonials__heading">Testimonials</h2>

      <Carousel className="testimonials__carousel">{testimonialList}</Carousel>
    </div>
  );
};

export default Testimonials;
