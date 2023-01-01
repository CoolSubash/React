import React from 'react'
import port from '/ReactPortfolio/portfolio/src/image/p.png'
import './Portfolio.css'
import { pdata } from '../../data'
import PortfolioList from './PortfolioList'
function Portfolio() {
  console.log(pdata)
  return (
    <>
      <section id="portfolio">
        <div className="p-heading">
          <h1>My latest Portfolio</h1>
        </div>
        <div className="p-card-container">
          {pdata.map((e, index) => {
            return <PortfolioList image={port} key={index} />
          })}
        </div>
      </section>
    </>
  )
}

export default Portfolio
