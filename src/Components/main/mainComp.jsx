import React from 'react'
import "./main.css"
import "./main.js"
export default function Main() {

  return (
    <>
      <div className="container-main">
        <h1 className='h'>About Me</h1>
        <main className='reveal'>
          {/* About Me */}
          <div className="about-me">
            <div className="left-main">
              <div className="left-main-img">
                <img src="https://i.postimg.cc/vTXzcZ9H/my.png" alt="" />
              </div>
            </div>

            <div className="right-main">
              <h1>Hi There I'm <span>Sabir ALi</span></h1>
              <h3>Web Devolper</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim nobis debitis nesciunt, tempora nulla? Vel ad laborum, fuga vitae illum nesciunt!
              </p>

              <button className='Down'>Download CV</button>
            </div>
          </div>
        </main>
      </div>

      {/* Services */}

      {/*Extenal File  */}



    </>
  )
}
