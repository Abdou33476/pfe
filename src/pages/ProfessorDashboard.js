import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PropositionPFE from "./PropositionPFE";
import SelectionEncadrement from "./SelectionEncadrement";
import PreferencesJury from "./PreferencesJury";
import SuiviProjetsEncadres from "./SuiviProjetsEncadres";
import Soutenances from "./Soutenances";
import "./ProfessorDashboard.css";  // Assure-toi que le fichier CSS est importé ici

const ProfessorDashboard = () => {
  const [activeSection, setActiveSection] = useState("welcome");

  const renderContent = () => {
    switch (activeSection) {
      case "proposeTopics":
        return <PropositionPFE />;
      case "selectProjects":
        return <SelectionEncadrement />;
      case "juryPreferences":
        return <PreferencesJury />;
      case "followProjects":
        return <SuiviProjetsEncadres />;
      case "soutenances":
        return <Soutenances />;
      default:
        return (
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Bienvenue dans votre tableau de bord professeur !
          </h2>
        );
    }
  };

  return (
    <div className="professor-dashboard">
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar
          role="professor"
          userName="Prof. Ahmed"
          userProfilePic="/images/professor-profile.jpg"
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

export default ProfessorDashboard;
