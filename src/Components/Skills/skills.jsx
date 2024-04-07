import React, { useState, useEffect } from 'react'
import "./skills.css"
import Counter from './percentage.jsx';
export default function Skills() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === 95) {
                clearInterval(interval);
            } else {
                setCounter((prevCounter) => prevCounter + 1);
            }
        }, 10);

        return () => clearInterval(interval); // Cleanup function to clear interval on unmount
    }, [counter]);
    return (
        <div className='skill D-f reveal adding'>
            <h1 className='h hs'>Skills</h1>
            <div className="skills-container D-f">
                <div className="skill-left D-f">
                    <h1>All the Skill that I have that in Field of Work are Mentioned.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex quod sequi aliquid aliquam nemo, culpa eius beatae.</p>
                    <p className='sec'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque architecto et.</p>
                </div>
                <div className="skill-right D-f">
                   <div className="skill-content D-f">
                   <h1>HTML</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">
                                    <div className="counters-container">
                                        <Counter endingPercentage={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#1b1b1b" />
                                    <stop offset="100%" stopColor="#bb2649" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-1' />
                        </svg>
                    </div>
                   </div>
                    <div className="skill-content D-f">
                    <h1>CSS</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">
                                    <div className="counters-container">
                                        <Counter endingPercentage={85} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-2' />
                        </svg>
                    </div>
                    </div>
                    <div className="skill-content D-f">
                    <h1>BOOTSTRAP</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">

                                    <div className="counters-container">
                                        <Counter endingPercentage={80} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-3' />
                        </svg>
                    </div>
                    </div>
                    <div className="skill-content D-f">
                    <h1>JAVASCRIPT</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">

                                    <div className="counters-container">
                                        <Counter endingPercentage={75} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-4' />
                        </svg>
                    </div>
                    </div>
                   <div className="skill-content D-f">
                   <h1>REACT</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">

                                    <div className="counters-container">
                                        <Counter endingPercentage={70} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-5' />
                        </svg>
                    </div>
                   </div>
                    <div className="skill-content D-f">
                    <h1>JQuery</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">
                                    <div className="counters-container">
                                        <Counter endingPercentage={60} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-6' />
                        </svg>
                    </div>
                    </div>
                    <div className="skill-content D-f">
                    <h1>MogoDb</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">
                                    <div className="counters-container">
                                        <Counter endingPercentage={15} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#673ab7" />
                                    <stop offset="100%" stopColor="#e91e63" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-7' />
                        </svg>
                    </div>
                    </div>
                    <div className="skill-content D-f">
                    <h1>Node Js Express</h1>
                    <div className='skill-center'>
                        <div className="outer">
                            <div className="inner D-f">
                                <div id="number">
                                    <div className="counters-container">
                                        <Counter endingPercentage={35} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="130px" height="120px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" className='svg-8' />
                        </svg>
                    </div>

                    </div>

                </div>
            </div>
            <h1 className='h ht'>Testimonial</h1>
        </div>
    )
}
