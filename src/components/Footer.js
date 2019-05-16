import React from 'react'

export default function Footer() {
  return (
    <div className="section white" id="footer">
      <div className="row">
        <div className="col l4 center-align">
            <img src="images/facebook-square-brands.svg" alt="Facebook" />
        </div>
        <div className="col l4 center-align">
            <img src="images/github-square-brands.svg" alt="GitHub" />
        </div>
        <div className="col l4 center-align">
            <img src="images/linkedin-brands.svg" alt="LinkedIn" />
        </div>
      </div>
      <div className="row" id="current_year">
        <p>&copy;sethsweb.com <span></span></p>
      </div>
    </div>
  )
}
