import React from "react"
import "./app.css"
import Header from "./Components/header/header"
import Main from "./Components/main/mainComp"
import { product } from "./data/product"
import Services from "./Components/Services/Services"
import Skills from "./Components/Skills/skills"
import Testimonial from "./Components/testmonial/testimonial";
import { testimonials } from './data/testmonial copy';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "./Components/Form/form"
import Footer from "./Components/footer/footer"

export default function App() {
  const settings = {
    dots: true,
    dotsColor: "whiter",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
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
     <div className="testimonial-container D-f">
                <div className="test-main-con reveal adding">
                    <Slider {...settings}>
                        {testimonials.map(testimonial => (
                            <Testimonial
                                key={testimonial.id}
                                name={testimonial.names}
                                position={testimonial.position}
                                testimonial={testimonial.testimonial}
                                img={testimonial.img}
                            />
                        ))}
                    </Slider>
                </div>
            </div>

      {/* Form */}
      <Form />

      {/* Footer */}
      <Footer />
    </>
  );
}
