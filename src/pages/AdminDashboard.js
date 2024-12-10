import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import GestionUtilisateurs from "./GestionUtilisateurs";
import ParametrageEmails from "./ParametrageEmails";
import ValidationSujets from "./ValidationSujets";
import PlanificationSoutenances from "./PlanificationSoutenances";
import SuiviEntreprises from "./SuiviEntreprises";
import "./AdminDashboard.css";  // Assure-toi que le fichier CSS est importé ici

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("welcome");

  const renderContent = () => {
    switch (activeSection) {
      case "manageUsers":
        return <GestionUtilisateurs />;
      case "manageEmails":
        return <ParametrageEmails />;
      case "validateSubjects":
        return <ValidationSujets />;
      case "scheduleDefense":
        return <PlanificationSoutenances />;
      case "followCompanies":
        return <SuiviEntreprises />;
      default:
        return (
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Bienvenue dans votre tableau de bord administrateur !
          </h2>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar
          role="admin"
          userName="Admin Nadira"
          userProfilePic="/images/admin-profile.jpg"
          onMenuClick={setActiveSection}
        />
        <div
          style={{
            marginLeft: "240px", 
            marginTop: "60px", 
            padding: "20px",
            width: "100%",
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
