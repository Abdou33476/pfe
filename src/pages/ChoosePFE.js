import React, { useState, useEffect } from "react";
import axios from "axios";
import "./rolesEtudiant.css";

const ChoosePFE = ({ userRole }) => {
  const [projects, setProjects] = useState([]); // Liste des projets depuis la base de données
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Charger les projets depuis l'API
  useEffect(() => {
    axios.get("http://localhost:8000/api/themes") // Remplacez par l'URL de votre API
      .then((response) => {
        setProjects(response.data); // Charger les projets dans l'état
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des thèmes :", error);
      });
  }, []);

  const handleChoice = (projectId) => {
    if (selectedProjects.includes(projectId)) {
      setSelectedProjects(selectedProjects.filter((id) => id !== projectId));
    } else if (selectedProjects.length < 10) {
      setSelectedProjects([...selectedProjects, projectId]);
    } else {
      alert("Vous ne pouvez sélectionner que 10 projets au maximum.");
    }
    setErrorMessage("");
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.trim()) {
      alert("Le nom du projet ne peut pas être vide.");
      return;
    }
    const newId = `P${projects.length + 1}`;
    setProjects([...projects, { name: newProject, id: newId }]);
    setNewProject("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProjects.length < 6) {
      setErrorMessage("Vous devez sélectionner au moins 6 projets pour soumettre votre liste.");
    } else {
      setErrorMessage("");
      setIsSubmitted(true);
    }
  };

  return (
    <div className="choose-pfe">
      <h2>Choisir vos sujets de PFE</h2>
      <form onSubmit={handleSubmit} className="pfe-choice-form">
        <div className="project-list">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <label className="project-label">
                <input
                  type="checkbox"
                  checked={selectedProjects.includes(project.id)}
                  onChange={() => handleChoice(project.id)}
                  disabled={
                    !selectedProjects.includes(project.id) &&
                    selectedProjects.length >= 10
                  }
                />
                {project.name}
              </label>
              {selectedProjects.includes(project.id) && (
                <span className="project-number">
                  Choix #{selectedProjects.indexOf(project.id) + 1}
                </span>
              )}
            </div>
          ))}
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button
          type="submit"
          className="confirm-button"
          disabled={selectedProjects.length === 0}
        >
          Confirmer
        </button>
      </form>

      {isSubmitted && (
        <div className="confirmed-list">
          <h3>Liste de vos choix confirmés :</h3>
          <ul>
            {selectedProjects.map((projectId, index) => {
              const project = projects.find((p) => p.id === projectId);
              return (
                <li key={project.id}>
                  {index + 1}. {project.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {userRole === "admin" || userRole === "professor" ? (
        <div className="add-project">
          <h3>Ajouter un nouveau projet</h3>
          <form onSubmit={handleAddProject}>
            <input
              type="text"
              placeholder="Nom du projet"
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
              className="add-project-input"
            />
            <button type="submit" className="add-project-button">
              Ajouter
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ChoosePFE;
