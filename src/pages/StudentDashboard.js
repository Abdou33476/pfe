import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubmitPFE from "./SubmitPFE";
import ChoosePFE from "./ChoosePFE";
import FollowAssignments from "./FollowAssignments";
import PrepareDefense from "./PrepareDefense";
import Notifications from "./Notifications";
import "./rolesEtudiant.css"; // Fichier CSS consolidé pour tous les rôles étudiants

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("welcome");

  const renderContent = () => {
    switch (activeSection) {
      case "submitPFE":
        return <SubmitPFE />;
      case "choosePFE":
        return <ChoosePFE />;
      case "followAssignments":
        return <FollowAssignments />;
      case "prepareDefense":
        return <PrepareDefense />;
      case "notifications":
        return <Notifications />;
      default:
        return (
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Bienvenue dans votre tableau de bord étudiant !
          </h2>
        );
    }
  };

  return (
    <div>
      {/* Header en haut */}
      <Header />
      <div style={{ display: "flex" }}>
        {/* Sidebar à gauche avec nom et photo */}
        <Sidebar
          role="student"
          userName="Nadir Belaid"
          userProfilePic="/profile-picture.jpg" // Mettez ici le chemin vers l'image de profil
          onMenuClick={setActiveSection}
        />
        {/* Contenu principal */}
        <div
          style={{
            marginLeft: "240px", // Compense la largeur de la Sidebar
            marginTop: "60px", // Compense la hauteur du Header
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

export default StudentDashboard;
