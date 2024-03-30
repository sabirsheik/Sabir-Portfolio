import React from 'react'
import "./form.css"
export default function Form() {
  return (
    <div className='form D-f'>
      <div className="form-container D-f reveal adding">
      <div className="form-left">
        <h1>Lets Talk On Your <span>Project</span></h1>
        <div className="form-left-inner">
            <h2>Quick Contact</h2>
            <span><i className="fa-solid fa-phone"></i>  +92 3275359491</span>
            <span><i className="fa-solid fa-location-dot"></i> Pakistan Chakwal</span>
            <span><i className="fa-solid fa-clock"></i>  Monday to Friday <br /> <span className='a'> 10Am 5Pm </span></span>
        </div>
      </div>
       <div className="form-right">
        <form action="">
            <div className="first-form D-f">
            <span>
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" />
            </span>
            <span>
            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" id="email" />
            </span>
            </div>
            <label htmlFor="subject">Subject</label><br />
            <input type="text" name="subject" id="subject" />
            <div className='msg'>
            <label htmlFor="message">Message</label><br />
             <textarea name="" id="" ></textarea>
            </div>
        </form>
       </div>
      </div>
    </div>
  )
}
