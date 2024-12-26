import React from 'react'
import "./main.css"
import "./main.js"
import resume from "./Sabir.pdf";
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
                <img src="https://i.postimg.cc/0Qjyj7WS/Sabir.jpg" alt="" />
              </div>
            </div>

            <div className="right-main">
              <h1>Hi There I'm <span>Sabir ALi</span></h1>
              <h3>Full Stack Web Devolper</h3>
              <p style={{textTransform:"capitalize"}}>Hey I'm Sabir Ali, a skilled full-stack developer with expertise in the MERN
                stack (MongoDB, Express.js, React, Node.js) & Next.Js. I have completed
                my training at NexcusBerry Training & Solution in Lahore, where I honed
                my skills in building scalable, high-performance web applications. I am
                proficient in designing and implementing user-friendly interfaces,
                managing robust backend systems, and deploying cloud-based solutions.
                With a strong focus on delivering customized, client-centric solutions, I am
                adept at collaborating within agile teams to create impactful digital
                products</p>

              <a href={resume} target='_blank' className='Down'>Download CV</a>
            </div>
          </div>
        </main>
      </div>

      {/* Services */}

      {/*Extenal File  */}



    </>
  )
}
