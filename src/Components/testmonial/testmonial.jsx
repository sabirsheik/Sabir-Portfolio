import React from 'react'

export default function Testimonial({ id, name, position, testimonial, img }) {

  return (
  <> 
   <div className="testimonial-card" key={id}>
     <div className="test-header D-f">
    <img src={img} alt={name} className="testimonial-img" />
     </div>
    <div className="testimonial-content D-f">
      <h3>{name}</h3>
      <p className="position">{position}</p>
      <p className="testimonial-text">{testimonial}</p>
    </div>
  </div>
  </>
  )
};
