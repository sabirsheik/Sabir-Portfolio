import React, { useState, useEffect } from 'react'
import "./header.css"
export default function Header() {

  // Scrolling Header Color
  const [btnState, setBtnState] = useState(false);
  const handleClick = () => {
    setBtnState(btnState => !btnState);
  }
  let toggleClassCheck = btnState ? 'null' : 'active';
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //  Steps Typing Animation

  const [textIndex, setTextIndex] = useState(0);
  const words = ["Sabir Ali", "Software Engenier", "Web Devolper", "MERN Stack Dev"];
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 500;
  const deletionSpeed = 120;
  const pauseDuration = 4000;

  useEffect(() => {
    let interval;
    let currentIndex = 0;
    let text = '';

    const typeNextCharacter = () => {
      if (currentIndex < words[textIndex].length) {
        text += words[textIndex][currentIndex];
        setDisplayedText(text);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        setTimeout(() => {
          setIsTyping(true);
          interval = setInterval(deleteLastCharacter, deletionSpeed);
        }, pauseDuration);
      }
    };

    const deleteLastCharacter = () => {
      if (text.length > 0) {
        text = text.slice(0, -1);
        setDisplayedText(text);
      } else {
        clearInterval(interval);
        setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          interval = setInterval(typeNextCharacter, typingSpeed);
        }, pauseDuration);
      }
    };

    interval = setInterval(typeNextCharacter, typingSpeed);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <>
      <div className="container-header-main D-f d-f-a">
        <header className={`D-f ${scrolled ? 'scrolled' : ''}`}>
          <i className="fa-solid fa-bars" id="menu-bar" onClick={handleClick}></i>
          <div className="header-logo-txt D-f">
            <img src="https://cdn-icons-png.flaticon.com/128/9605/9605589.png" alt="" />
            <h2><a href="">Smart</a> <span>Dev</span></h2>
          </div>
          <nav className={`navbar  ${toggleClassCheck}`}>
            <ul>
              <li><a href="" className="underline-effect">Home</a></li>
              <li><a href="main.jsx" className="underline-effect">About Us</a></li>
              <li><span className="underline-effect"><span>Services</span> <i className="fa-solid fa-chevron-down"></i></span>
                <ul>
                  <li><a href="">Blogs</a></li>
                  <li><a href="" className='skills'><span>Skills</span> <i className="fa-solid fa-chevron-down"></i></a>
                    <ul>
                      <li><a href="">Html</a></li>
                      <li><a href="">Css</a></li>
                      <li><a href="">BootStrap</a></li>
                      <li><a href="">Javascript</a></li>
                      <li><a href="">MERN Stack</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="" className="underline-effect">Testmonials</a></li>
              <li className="li-btn"><button id="btn">Contant US</button></li>
            </ul>
          </nav>
        </header>
        <div className="main-header D-f">
        <div className="animated-txt">
          <div className="typing-animation">
            <h1>Hi, I'm </h1>
            <span className="animation-abc"> {displayedText}</span>
          </div>
          <p>Hi I'm Sabir Ali I'm Web devolper. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat magnam doloribus! <span className='dis'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat ratione porro.</span></p>
        </div>
        <div className="btns-c D-f f-w">
           <a href=""><span  className='btns-h' id='btn1'>DownLoad CV</span></a>
          <a href=""><span className='btns-h' id='btn2'>Contact Me</span></a>

        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 290"><path fill="#171717" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,213.3C320,203,400,181,480,165.3C560,149,640,139,720,149.3C800,160,880,192,960,192C1040,192,1120,160,1200,144C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>

    </>
  )
}
