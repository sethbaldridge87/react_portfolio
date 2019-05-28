import React from 'react'

export default function Footer() {
  return (
    <div className="section white" id="footer">
      <div className="row">
        <div className="col l4 center-align">
          <a href="https://www.facebook.com/seth.r.baldridge"><img src="images/facebook-square-brands.svg" alt="Facebook" /></a>
        </div>
        <div className="col l4 center-align">
          <a href="https://github.com/sethbaldridge87"><img src="images/github-square-brands.svg" alt="GitHub" /></a>
        </div>
        <div className="col l4 center-align">
          <a href="https://www.linkedin.com/in/seth-baldridge-591282175/"><img src="images/linkedin-brands.svg" alt="LinkedIn" /></a>
        </div>
      </div>
      <div className="row" id="current_year">
        <p>&copy;sethsweb.com <span></span></p>
      </div>
    </div>
  )
}
