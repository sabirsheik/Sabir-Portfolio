
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
            <div className="card-content-test D-f">
              <h3>{name}</h3>
              <h5>"{position}"</h5>
              <p>{testimonial}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
   
  );
};




export default Testimonial;
