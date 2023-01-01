import React from 'react'
import './Portfolio.css'
function PortfolioList({ image }) {
  return (
    <div className="p-card">
      <div className="p-card-top"></div>
      <div className="p-img">
        <img src={image} alt="" />
      </div>
      <div className="p-card-bottom"></div>
    </div>
  )
}

export default PortfolioList
