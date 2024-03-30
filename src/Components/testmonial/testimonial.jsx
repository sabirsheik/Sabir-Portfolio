
import React from "react";
import "./test.css"

const Testimonial = ({ name, position, testimonial, img }) => {

  return (
    <div className="slide-container-test">
      <div className="slide-content-test">

        <div className="card-wrapper-test">
          <div className="card-test">
            <div className="image-content-test">
              <span className="overlay-test">
              </span>
              <div className="card-image-test">
                <img src={img} alt={name} className="card-img-test" />
              </div>
            </div>
            <div className="card-content-test">
              <h1>{name}</h1>
              <h3>"{position}"</h3>
              <p>{testimonial}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};




export default Testimonial;
