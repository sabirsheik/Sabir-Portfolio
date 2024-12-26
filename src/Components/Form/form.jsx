import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './form.css';

const Form = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@[\w-]+\.+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    const { name, email, subject, message } = formData;
  
    if (!name || !email || !subject || !message) {
      setError('All fields are required.');
      alert('All fields are required.'); // Show alert for missing fields
      return;
    }
  
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      alert('Please enter a valid email address.'); // Show alert for invalid email
      return;
    }
  
    emailjs
      .send(
        'service_96cwrd9',
        'template_zk567c9',
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        'UoqaABS-Aae31qtT4'
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setSuccess('Your message has been sent successfully!');
            alert('Your message has been sent successfully!'); // Show success alert
            setFormData({ name: '', email: '', subject: '', message: '' });
          }
        },
        (err) => {
          setError('Failed to send message. Please try again later.');
          alert('Failed to send message. Please try again later.'); // Show error alert
        }
      );
  };
  

  return (
    <div className="form D-f">
      <div className="form-container D-f reveal adding">
        <div className="form-left">
          <h1>
            Let&apos;s Talk About Your <span>Project</span>
          </h1>
          <div className="form-left-inner">
            <h2>Quick Contact</h2>
            <span>
              <i className="fa-solid fa-phone"></i> +92 3275359491
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i> Pakistan Chakwal
            </span>
            <span>
              <i className="fa-solid fa-clock"></i> Monday to Friday <br />{' '}
              <span className="a">10 AM - 5 PM</span>
            </span>
             <span>
              <i className="fa-solid fa-email"></i> sabirsheik12787@gmail.com
            </span>
          </div>
        </div>
        <div className="form-right">
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="first-form D-f">
              <span>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </span>
              &nbsp;&nbsp;
              <span>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </span>
            </div>

            <label htmlFor="subject">Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />

            <div className="msg">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
