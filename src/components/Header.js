import React from "react";
import Notifications from "./Notifications";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-title">
        <img src="/logo.png" alt="Logo" className="header-logo" />
        <div className="header-text">
          <h1 className="platform-title">PRO PFE</h1>
          <p className="platform-subtitle">Université Abou Bekr Belkaid Tlemcen</p>
        </div>
      </div>
      <div className="header-notifications">
        <Notifications />
      </div>
    </header>
  );
};

export default Header;
