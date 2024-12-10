import React from "react";
import "./rolesEtudiant.css"; // Import du fichier CSS consolidé

const Notifications = () => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        <li>Votre projet a été affecté.</li>
        <li>La date de soutenance a été fixée au 25 novembre 2024.</li>
        <li>Rappel : Soumettez votre rapport avant le 20 novembre 2024.</li>
      </ul>
    </div>
  );
};

export default Notifications;
