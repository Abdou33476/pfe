import React from "react";
import {
  FaTasks,
  FaListAlt,
  FaClipboardList,
  FaCalendarAlt,
  
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ role, onMenuClick, userName, userProfilePic, onLogout }) => {
  const menus = {
    student: [
      { id: "submitPFE", label: "Proposer un PFE", icon: <FaTasks /> },
      { id: "choosePFE", label: "Choisir un PFE", icon: <FaListAlt /> },
      { id: "followAssignments", label: "Suivi des Affectations", icon: <FaClipboardList /> },
      { id: "prepareDefense", label: "Préparation Soutenance", icon: <FaCalendarAlt /> },
    ],
    professor: [
      { id: "proposeTopics", label: "Proposer des Sujets", icon: <FaTasks /> },
      { id: "selectProjects", label: "Sélectionner les Projets", icon: <FaListAlt /> },
      { id: "juryPreferences", label: "Préférences de Jury", icon: <FaClipboardList /> },
      { id: "followProjects", label: "Suivi des Projets", icon: <FaCalendarAlt /> },
    ],
    admin: [
      { id: "manageUsers", label: "Gérer les Utilisateurs", icon: <FaClipboardList /> },
      { id: "manageEmails", label: "Paramétrage Emails", icon: <FaTasks /> },
      { id: "validateSubjects", label: "Validation des Sujets", icon: <FaListAlt /> },
      { id: "scheduleDefense", label: "Planification des Soutenances", icon: <FaCalendarAlt /> },
    ],
  };

  const renderMenuItems = () =>
    (menus[role] || []).map((menu) => (
      <li
        key={menu.id}
        className="menu-item-modern"
        onClick={() => onMenuClick(menu.id)}
      >
        {menu.icon}
        <span className="menu-text">{menu.label}</span>
      </li>
    ));

  return (
    <div className="sidebar-modern">
      {/* Header */}
      <div className="sidebar-header">
        <img
          src={userProfilePic || "/default-profile.png"}
          alt=""
          className="profile-pic"
        />
        <h3 className="user-name">{userName || "Utilisateur"}</h3>
        <p className="user-role">{role === "student" ? "Étudiant" : role === "professor" ? "Professeur" : "Admin"}</p>
      </div>

     

      {/* Menu */}
      <ul className="sidebar-menu-modern">{renderMenuItems()}</ul>

      {/* Footer avec bouton de déconnexion */}
      <div className="sidebar-footer" onClick={onLogout}>
        <li className="menu-item-modern">
          <FaSignOutAlt className="menu-icon" />
          <span className="menu-text">Déconnexion</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
