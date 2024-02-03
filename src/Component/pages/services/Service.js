import React from 'react'

export default function Service() {
  return (
    <div className="categories-area section-padding30" id='services' style={{ backgroundColor:'white' }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle text-center mb-80">
                    <span>Our Services</span>
                    <h2>What We Can Do For You</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                        <span className="flaticon-shipped"></span>
                    </div>
                    <div className="cat-cap">
                        <h5><a href="services.html">Land Transport</a></h5>
                        <p>Across bustling highways and scenic backroads, our land transport network delivers your cargo swiftly and securely. We offer a variety of trailer options to accommodate any size shipment, along with dedicated routes and real-time tracking for complete peace of mind. Whether you need fast-paced cross-country hauls or efficient regional distribution, our land transport solutions keep your supply chain moving smoothly.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                        <span className="flaticon-ship"></span>
                    </div>
                    <div className="cat-cap">
                        <h5><a href="services.html">Ship Transport</a></h5>
                        <p>Harnessing the vast potential of the oceans, our ship transport services offer cost-effective and reliable delivery for even the bulkiest cargo. From containerized freight to specialized vessels for oversized items, we navigate global trade routes with expertise. Our partnerships with leading shipping lines ensure competitive rates and seamless port-to-port connections, getting your goods across the globe efficiently and securely.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                        <span className="flaticon-plane"></span>
                    </div>
                    <div className="cat-cap">
                        <h5><a href="services.html">Air Transport</a></h5>
                        <p>When speed is paramount, our air transport solutions deliver your time-sensitive shipments with unparalleled urgency. We offer dedicated charters, priority bookings on commercial airlines, and expertise in navigating customs regulations for streamlined international deliveries. Whether you need critical medical supplies across continents or high-value goods to meet tight deadlines, our air transport services ensure your cargo arrives swiftly and securely.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
