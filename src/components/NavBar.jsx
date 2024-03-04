import React, { useState } from "react";
import './NavBar.css'

function NavBar() {
  const [showUbDropdown, setShowUbDropdown] = useState(false);
  const [showMayuriDropdown, setShowMayuriDropdown] = useState(false);

  const Menus = ['HOME', 'MENU', 'PROGRESS', 'CONTACT'];

  const handleMenuClick = (menu) => {
    if (menu === "Ub") {
      setShowUbDropdown(!showUbDropdown);
      setShowMayuriDropdown(false); // Hide Mayuri dropdown if it's currently shown
    } else if (menu === "Mayuri") {
      setShowMayuriDropdown(!showMayuriDropdown);
      setShowUbDropdown(false); // Hide Ub dropdown if it's currently shown
    }
  }

  return (
    <>
      <nav>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="41"
            fill="none"
            viewBox="0 0 54 41"
          >
             <path
              fill="pink"
              d="M54 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            ></path>
            <path
              fill="pink"
              fillRule="evenodd"
              d="M13.75 40.794C6.156 40.794 0 34.638 0 27.044V1h5v26.044a8.75 8.75 0 0 0 8.75 8.75c4.893 0 8.75-3.771 8.75-8.544h5v7.5a1.25 1.25 0 0 0 2.5 0v-8.875a6.25 6.25 0 0 1-7.5-6.125V7.25a6.25 6.25 0 1 1 12.5 0v27.5a1.25 1.25 0 1 0 2.5 0V7.25a6.25 6.25 0 1 1 12.5 0v27.5a6.25 6.25 0 0 1-10 5A6.222 6.222 0 0 1 36.25 41a6.222 6.222 0 0 1-3.75-1.25 6.251 6.251 0 0 1-9.466-2.47c-2.456 2.197-5.723 3.514-9.284 3.514Zm30-4.794c-.69 0-1.25-.56-1.25-1.25V7.25a1.25 1.25 0 1 1 2.5 0v27.5c0 .69-.56 1.25-1.25 1.25ZM30 19.75a1.25 1.25 0 0 1-2.5 0V7.25a1.25 1.25 0 1 1 2.5 0v12.5Z"
              clipRule="evenodd"
            ></path>
            <path
              fill="pink"
              fillRule="evenodd"
              d="M7.5 27.25a6.25 6.25 0 1 0 12.5 0v-20a6.25 6.25 0 1 0-12.5 0v20Zm6.25 1.25c-.69 0-1.25-.56-1.25-1.25v-20a1.25 1.25 0 1 1 2.5 0v20c0 .69-.56 1.25-1.25 1.25Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <div>
        <ul className="ubm">
         <li><a href="#Ub" onClick={() => handleMenuClick("Ub")} className="nav-button">Ub</a></li>
         <li><a href="#Mayuri" onClick={() => handleMenuClick("Mayuri")} className="nav-button">Mayuri</a></li>
        </ul>
        </div>
      

      </nav>
      {showUbDropdown && (
        <div className="dropdown">
          <ul>
            {Menus.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
      {showMayuriDropdown && (
        <div className="dropdown">
          <ul>
            {Menus.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="letter">

      <div className="welcome">
        <h1>WELCOME </h1>
        <h1>TO</h1>
        </div>
        <div className="mayuri">
        <h1> MAYURI </h1>
      </div>
      </div>
    </>
  );
}

export default NavBar;
