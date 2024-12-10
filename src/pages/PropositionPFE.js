import React, { useState } from "react";
import "./PropositionPFE.css";  // Importation du CSS spécifique à cette page

const PropositionPFE = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    options: "",  // L'option choisie pour le master
    projectType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on peut envoyer les données au backend ou les stocker localement
    alert(`Sujet proposé : ${form.title}`);
  };

  return (
    <div className="proposition-pfe-container">
      <h2>Proposer un Sujet de PFE</h2>
      <form onSubmit={handleSubmit} className="proposition-pfe-form">
        <label>Titre du Sujet :</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <label>Description :</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        <label>Options de Master :</label>
        <select
          value={form.options}
          onChange={(e) => setForm({ ...form, options: e.target.value })}
          required
        >
          <option value="">-- Sélectionnez une option --</option>
          <option value="IA">IA</option>
          <option value="SIC">SIC</option>
          <option value="GL">GL</option>
          <option value="RSD">RSD</option>
        </select>

        <label>Type de Projet :</label>
        <select
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          required
        >
          <option value="classique">Classique</option>
          <option value="innovant">Innovant</option>
          <option value="entreprise">Entreprise</option>
        </select>

        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default PropositionPFE;
