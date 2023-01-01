import React from 'react'
import './Intro.css'
import personImage from '/ReactPortfolio/portfolio/src/image/i-img.jpg'
function Intro() {
  return (
    <>
      <section className="i-container">
        <section className="i-left">
          <div className="i-heading">
            <h6>INTRODUCTION</h6>
            <h1>I'm Subash a Creative</h1>
          </div>
          <div className="i-animation">
            <div className="i-job">
              <h3>Web Developer.</h3>

              <h3>Programmer.</h3>

              <h3>Designer.</h3>
            </div>
          </div>
          <div className="i-details">
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions.
            </p>
          </div>
        </section>

        <section className="i-right">
          <div className="i-right-bg"></div>
          <div className="i-right-img">
            <img src={personImage} alt="person-logo" />
          </div>
        </section>
      </section>
    </>
  )
}

export default Intro
