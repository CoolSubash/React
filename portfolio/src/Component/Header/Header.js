import React from 'react'
import './Header.css'
function Header() {
  let url = ''
  return (
    <>
      <header>
        <div className="h-container">
          <div className="h-name">
            <img
              src="https://theme.madsparrow.me/most/wp-content/uploads/2022/09/most_logo2_light.svg"
              alt=""
            />
          </div>
          <div className="h-navbar">
            <nav>
              <ul>
                <li>
                  <a href={url}>Home</a>
                </li>
                <li>
                  <a href={url}>About</a>
                </li>
                <li>
                  <a href={url}>Projects</a>
                </li>
                <li>
                  <a href={url}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="h-toggle"></div>
        </div>
      </header>
    </>
  )
}

export default Header
