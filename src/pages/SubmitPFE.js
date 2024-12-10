import React, { useState } from "react";
import "./SubmitPFE.css";  // Importation du CSS spécifique à cette page

const SubmitPFE = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    projectType: "",
  });

  const [proposals, setProposals] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // État pour vérifier si un sujet a été proposé

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation des champs obligatoires
    if (!form.title || !form.description || !form.projectType) {
      alert("Tous les champs obligatoires doivent être remplis.");
      return;
    }

    const newProposal = {
      title: form.title,
      description: form.description,
      projectType: form.projectType,
      date: new Date().toLocaleDateString(),
      response: "En attente", // Réponse initiale
    };
    
    // Ajouter la nouvelle proposition à la liste des propositions
    setProposals([newProposal]);
    setForm({
      title: "",
      description: "",
      projectType: "",
    });
    setIsSubmitted(true); // Marquer comme soumis
    alert(`Sujet proposé : ${form.title}`);
  };

  const handleEdit = () => {
    // Permet de réinitialiser le formulaire pour modifier le thème proposé
    setIsSubmitted(false);
    setForm({
      title: proposals[0].title,
      description: proposals[0].description,
      projectType: proposals[0].projectType,
    });
  };

  return (
    <div className="submit-pfe">
      <h2>Soumettre un Sujet de PFE</h2>
      
      {!isSubmitted ? (
        // Affichage du formulaire tant qu'un seul sujet n'est pas soumis
        <form onSubmit={handleSubmit} className="pfe-form">
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

          <label>Type de Projet :</label>
          <select
            value={form.projectType}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            required
          >
            <option value="">-- Sélectionnez un type --</option>
            <option value="classique">Classique</option>
            <option value="innovant">Innovant</option>
          </select>

          <button type="submit" className="submit-button">Soumettre</button>
        </form>
      ) : (
        // Affichage du message de confirmation et des propositions soumises
        <div>
          <p>Votre sujet a été soumis avec succès !</p>
          <button onClick={handleEdit} className="edit-button">Modifier</button>
        </div>
      )}

      <h3>Sujets Proposés</h3>
      <table className="proposals-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Type de Projet</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal, index) => (
            <tr key={index}>
              <td>{proposal.title}</td>
              <td>{proposal.description}</td>
              <td>{proposal.projectType}</td>
              <td>{proposal.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmitPFE;
