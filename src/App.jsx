import React from "react";
import Header from "./Components/header/header";
import Main from "./Components/main/mainComp";
import { product } from "./data/product";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/skills";
import Form from "./Components/Form/form";
import Footer from "./Components/footer/footer";
// import { testimonials } from "./data/testmonial.js";
// import Testimonial from "./Components/testmonial/testmonial.jsx";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./App.css";

export default function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Srvices */}
      <div className="services reveal adding">
        <h1 className="h hc">Services</h1>
        <div className="services-container D-f ">
          {product.map((item) => (
            <Services
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              statement={item.statement}
            />
          ))}
        </div>
      </div>
      {/* Skills */}
      <Skills />

     {/* Testmonial */}
    {/* <div className="testimonial D-f reveal adding">
    <div className="testimonials-container D-f">
       <Slider {...settings}>
      {testimonials.map((testimonial) => {
       <Testimonial  {...testimonial}/>
      })}
    </Slider>
  </div>
    </div> */}
    

      {/* Form */}
      <Form />
         

      {/* Footer */}
      <Footer />
    </>
  );
}
