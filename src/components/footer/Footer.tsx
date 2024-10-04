import React from "react";
import "./Footer.css";

const Footer = () => {
  const d = new Date(); 
  const year = d.getFullYear(); 

  return(
    <div className="bg-footer">
      <p className="footer-text">&copy; Copyright {year}, Tomoyuki Yasukawa</p>
    </div>
  );
};

export default Footer;