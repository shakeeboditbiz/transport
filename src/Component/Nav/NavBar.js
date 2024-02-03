import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase";

const styles = {
  mobileMenuIcon: {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "#000",
    marginRight: "10px",

  },
  mobileMenuDropdown: {
    display: "none",
    opacity: 0,
    transition: "opacity 0.3s ease",
    position: "fixed", 
    top: 0,
    left: 0,
    height: "100%",
    width: "50%", 
    backgroundColor: "#ffffff",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    padding: "20px", 

  },
  mobileMenuDropdownShow: {
    display: "block",
    opacity: 1,
  },
  mobileMenuLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  mobileMenuLink: {
    marginBottom: "15px",
  },
  mobileMenuLinkAnchor: {
    textDecoration: "none",
    color: "#000",
    fontSize: "1.2rem", 
    transition: "color 0.3s ease",
  },
  mobileMenu: {
    display: "none",
  },
  mobileMenuShow: {
    display: "block",
  },
  a: {
    color: "#000",
  },
 
};

export default function NavBar({authenticated}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [authenticated,setAuthenticated]=useState(false);
  const navigate=useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
console.log("pp",authenticated);
  const navLinkStyle = {
    transition: "all 0.3s ease",
  };
  const logout= async()=>{
    await signOut(auth);
  }
const navgateLogin=()=>{
  navigate('/login');
}
  return (
    <div className="header-bottom header-sticky">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="logo">
              <a href="index.html">
                <img src="./img/logo/logo-01.png" alt="" height="39" width="171" />
              </a>
            </div>
          </div>
          <div className="col-xl-10 col-lg-10">
            <div className="menu-wrapper d-flex align-items-center justify-content-end">
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="#" style={navLinkStyle}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" style={navLinkStyle}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#services" style={navLinkStyle}>
                        Services
                      </a>
                    </li>
                    <li>
                      {
                        authenticated?
                      <a onClick={logout} style={{ cursor:'pointer' }}>
                        Logout
                      </a>:""
                      }
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className={`mobile-menu-icon d-lg-none ${mobileMenu ? "show" : ""}`}
                onClick={toggleMobileMenu}
                style={styles.mobileMenuIcon}
              >
                <FaBars style={{ color:'#fff' }}/>
              </div>
              <div
                className={`mobile-menu-dropdown d-lg-none ${mobileMenu ? "show" : ""}`}
                style={{
                  ...styles.mobileMenuDropdown,
                  ...(mobileMenu ? styles.mobileMenuDropdownShow : {}),
                }}
              >
                <nav>
                  <ul>
                    <li style={{ padding:"10px" }}>
                      <a href="#"  style={{ color:'black' }}>
                        Home
                      </a>
                    </li>
                    <li style={{ padding:"10px" }}>
                      <a href="#about" style={{ color:'black' }}>
                        About
                      </a>
                    </li>
                    <li style={{ padding:"10px" }}>
                      <a href="#services" style={{ color:'black' }}>
                        Services
                      </a>
                    </li>
                    <li style={{ padding:"10px" }}>
                      <a href="#contact" style={{ color:'black' }}>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a onClick={navgateLogin} style={{ cursor:'pointer',padding:'10px' }}>
                        Login
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div
            className={`col-12 mobile_menu ${mobileMenu ? "show" : ""}`}
            style={mobileMenu ? styles.mobileMenuShow : styles.mobileMenu}
          ></div>
        </div>
      </div>
    </div>
  );
}
