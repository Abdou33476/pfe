import React from "react";
import "./rolesEtudiant.css";

const FollowAssignments = () => {
  return (
    <div className="follow-assignments">
      <h2>Suivi des affectations</h2>
      <p>Votre projet a été affecté :</p>
      <table className="assignments-table">
        <thead>
          <tr>
            <th>Projet</th>
            <th>Encadrant</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Projet A : Développement web</td>
            <td>Prof. Ahmed</td>
            <td>En cours</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FollowAssignments;
