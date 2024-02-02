import React from "react";
// import Footer from "./;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/Header";
import Loader from "./Component/loader/Loader";
import NavBar from "./Component/Nav/NavBar";
import TopInfo from "./Component/Nav/TopInfo";
import About from "./Component/pages/about/About";
import ShippingDetails from "./page/ShippingDetails";
import Footer from "./Component/Footer"
import Contact from "./Component/pages/contact/Contact"
import Info from "./Component/Info"
import Service from "./Component/pages/services/Service"
import Login from "./page/Login";
import Register from "./page/Register";
import PrivateRoute from "./middleware/PrivateRoute";

export default function App() {
  return (
    <div className="header-area">
      <div className="main-header">
        <Router >
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/shippingdetails" element={<ShippingDetails />}  /> */}
            {/* <Route path="/shippingdetails" element={<PrivateRoute component={ShippingDetails} />} /> */}
             <Route path="/shippingdetails" element={<PrivateRoute component={ShippingDetails} />} />


            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/register" element={<Register/>}/> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* <Loader /> */}
      <TopInfo />
      <NavBar />
      <Header />
      <Info />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
