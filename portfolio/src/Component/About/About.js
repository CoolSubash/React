import React from 'react'
import personImage from '/ReactPortfolio/portfolio/src/image/i-img.jpg'
import './About.css'
function About() {
  return (
    <section id="about">
      <div className="a-left">
        <div className="a-left-img">
          <img src={personImage} alt="" />
        </div>
      </div>

      <div className="a-right">
        <div className="a-details">
          <p>
            I am subash Neupane. I am from Nepal. I am pursuing my computer
            science degree from Claflin university.
          </p>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores. My passion is to design digital user experiences
            through the bold interface and meaningful interactions.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  )
}

export default About
