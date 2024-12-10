import React, { useState } from "react";
import "./GestionProjets.css"; // Ajout du fichier CSS pour styliser

const GestionProjets = () => {
  const [projects, setProjects] = useState([]);
  const [themes, setThemes] = useState([
    {
      id: 1,
      title: "Stage en développement web",
      company: "Entreprise A",
      description: "Développement d'une application web",
    },
    {
      id: 2,
      title: "Thème sur l'intelligence artificielle",
      company: "Entreprise B",
      description: "Recherche sur les algorithmes de machine learning",
    },
  ]);
  const [newTheme, setNewTheme] = useState({
    title: "",
    company: "",
    description: "",
  });

  const addTheme = () => {
    if (!newTheme.title || !newTheme.company || !newTheme.description) {
      alert("Veuillez remplir tous les champs pour ajouter un thème !");
      return;
    }
    const newId = themes.length > 0 ? themes[themes.length - 1].id + 1 : 1;
    setThemes([...themes, { id: newId, ...newTheme }]);
    setNewTheme({ title: "", company: "", description: "" });
  };

  return (
    <div className="gestion-projets">
      <h2>Gestion des Projets et Thèmes</h2>
      <div className="formulaire-theme">
        <h3>Ajouter un Stage ou Thème</h3>
        <input
          type="text"
          placeholder="Titre du stage/thème"
          value={newTheme.title}
          onChange={(e) => setNewTheme({ ...newTheme, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nom de l'entreprise"
          value={newTheme.company}
          onChange={(e) => setNewTheme({ ...newTheme, company: e.target.value })}
        />
        <textarea
          placeholder="Description du stage/thème"
          value={newTheme.description}
          onChange={(e) =>
            setNewTheme({ ...newTheme, description: e.target.value })
          }
        />
        <button onClick={addTheme}>Ajouter</button>
      </div>

      <h3>Liste des Thèmes/Stages</h3>
      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>
            <strong>{theme.title}</strong> ({theme.company}) -{" "}
            {theme.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionProjets;
