import React from 'react'

export default function About() {
  return (
    <div className="about-low-area padding-bottom" id='about' style={{ backgroundColor:'#fff' }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="about-caption mb-50">
                    {/* <!-- Section Tittle --> */}
                    <div className="section-tittle mb-35">
                        <span>About Our Company</span>
                        <h2>Safe Logistic & Transport  Solutions That Saves our Valuable Time!</h2>
                    </div>
                    <p>Shas Express Logistics & Cargo is a company that provides safe and efficient logistics and transport solutions. We have a wide range of services to meet your needs, including land, sea, and air transport. We are committed to providing our customers with the highest quality service at the most competitive prices.</p>
                    <p>Our team of experienced professionals is dedicated to providing you with the best possible service. We understand that your time is valuable, so we will work hard to get your shipments delivered on time and on budget. We are also committed to safety, so you can rest assured that your cargo is in good hands.</p>
                    <a href="about.html" className="btn">More About Us</a>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                {/* <!-- about-img --> */}
                <div className="about-img ">
                    <div className="about-font-img">
                        <img src="assets/img/gallery/about2.png" alt=""/>
                    </div>
                    <div className="about-back-img d-none d-lg-block">
                        <img src="assets/img/gallery/about1.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
