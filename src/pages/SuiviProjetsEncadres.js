import React from "react";
import "./SuiviProjetsEncadres.css";

const SuiviProjetsEncadres = () => {
  const projects = [
    { id: 1, title: "Développement d'une application web", status: "En cours" },
    { id: 2, title: "Optimisation des algorithmes AI", status: "Terminé" },
    { id: 3, title: "Migration vers le Cloud", status: "En cours" },
    { id: 4, title: "Déploiement CI/CD", status: "Terminé" },
  ];

  return (
    <div className="suivi-projets-encadres-container">
      <h2>Suivi des Projets Encadrés</h2>
      <div className="projects-table-wrapper">
        <table className="projects-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Titre du Projet</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className={project.status === "Terminé" ? "completed" : "in-progress"}
              >
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuiviProjetsEncadres;
