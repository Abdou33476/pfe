import React from "react";
import "./SubmitProject.css";

const SubmitProject = () => {
  return (
    <div className="submit-project">
      <h2>Soumettre un Projet</h2>
      <form className="project-form">
        <label>Titre du Projet :</label>
        <input type="text" placeholder="Entrez le titre du projet" />
        <label>Description :</label>
        <textarea placeholder="Décrivez votre projet ici"></textarea>
        <label>Encadrant :</label>
        <input type="text" placeholder="Nom de l'encadrant" />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default SubmitProject;
