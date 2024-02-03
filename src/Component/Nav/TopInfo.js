import React from 'react'

export default function TopInfo() {
  return (
    <header>
    {/* <!-- Header Start --> */}
    {/* <div className="header-area">
      <div className="main-header "> */}
    <div className="header-top d-none d-lg-block">
      <div className="container">
        <div className="col-xl-12">
        <div className="row d-flex justify-content-between align-items-center">
    <div className='header-info-left'>
      <ul>
        <li>Phone: +91 96333 99676</li>
        <li>Email: info@shasexpress.com</li>
      </ul>
    </div>
    <div className="header-info-right">
      <ul className="header-social">
        {/* <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li> */}
        <li>
          <a href="https://www.facebook.com/profile.php?id=61555257877582">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/shasexpress/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li> */}
        <li>
          <a href="mailto:info@shasexpress.com" target='__blank'>
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
        </div>
    </div>
    </div>

    {/* </div>
     </div> */}
    {/* <!-- Header End --> */}
  </header>
  )
}
