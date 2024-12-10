import React from "react";
import "./SuiviProjets.css";

const SuiviProjets = () => {
  const projects = [
    { student: "Belaid Mohammed Nadir", title: "Gestion PFE", status: "En cours" },
    { student: "Amina Benali", title: "Optimisation de la logistique", status: "Terminé" },
  ];

  return (
    <div className="suivi-projets-container">
      <h2>Suivi des Projets Encadrés</h2>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Étudiant</th>
            <th>Titre du Projet</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className={project.status === "Terminé" ? "completed" : "in-progress"}>
              <td>{project.student}</td>
              <td>{project.title}</td>
              <td>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuiviProjets;
