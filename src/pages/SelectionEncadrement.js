import React, { useState, useEffect } from "react";
import "./SelectionEncadrement.css"; // Importation du CSS spécifique à cette page

const SelectionEncadrement = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null); // ID du projet sélectionné pour afficher la description
  const [selectedProjects, setSelectedProjects] = useState([]); // Projets sélectionnés par l'utilisateur

  // Simulation de récupération des données depuis une API
  useEffect(() => {
    const fetchProjects = async () => {
      // Remplacer cette partie par une requête API réelle
      const response = [
        {
          id: 1,
          title: "Développement d'une application web",
          proposer: "Entreprise A",
          description: "Création d'une application web pour gérer les stocks et les commandes.",
        },
        {
          id: 2,
          title: "Optimisation des algorithmes AI",
          proposer: "Prof. Ahmed",
          description: "Amélioration des performances d'un algorithme AI pour la reconnaissance faciale.",
        },
      ];
      setProjects(response);
    };

    fetchProjects();
  }, []);

  const toggleDescription = (id) => {
    setSelectedProjectId(selectedProjectId === id ? null : id); // Basculer entre afficher et masquer la description
  };

  const handleSelectProject = (id) => {
    setSelectedProjects((prevSelectedProjects) => {
      if (prevSelectedProjects.includes(id)) {
        return prevSelectedProjects.filter((projectId) => projectId !== id);
      } else {
        return [...prevSelectedProjects, id];
      }
    });
  };

  const handleConfirmSelection = () => {
    alert("Vœux confirmés : " + selectedProjects.map((id) => projects.find(p => p.id === id).title).join(", "));
  };

  return (
    <div className="selection-encadrement-container">
      <h2>Sélectionner les Projets à Encadrer</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <div className="project-title">
              <input
                type="checkbox"
                className="project-checkbox"
                checked={selectedProjects.includes(project.id)}
                onChange={() => handleSelectProject(project.id)}
              />
              <span>{project.title} - {project.proposer}</span>
              <button
                className="view-description-btn"
                onClick={() => toggleDescription(project.id)}
              >
                Voir
              </button>
            </div>
            {selectedProjectId === project.id && (
              <p className="project-description">{project.description}</p>
            )}
          </li>
        ))}
      </ul>

      <div className="selected-projects">
        <h3>Vœux Sélectionnés :</h3>
        <ul>
          {selectedProjects.map((id) => (
            <li key={id}>{projects.find((project) => project.id === id).title}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleConfirmSelection} className="confirm-button">
        Confirmer les Vœux
      </button>
    </div>
  );
};

export default SelectionEncadrement;
