import React, { useState } from "react";
import "./GestionUtilisateurs.css";

const GestionUtilisateurs = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ahmed", prenom: "Ali", email: "ahmed@example.com", role: "Professeur", entreprise: "Sonelgaz", dateRecrutement: "2020-01-01" },
    { id: 2, name: "Amina", prenom: "Zahra", email: "amina@example.com", role: "Étudiant", entreprise: "Diagnomed" },
  ]);
  
  const [newUser, setNewUser] = useState({ name: "", prenom: "", email: "", role: "", entreprise: "", dateRecrutement: "" });
  const [selectedRole, setSelectedRole] = useState("all"); // Sélection du type de rôle

  const addUser = () => {
    if (!newUser.name || !newUser.prenom || !newUser.email || !newUser.role || (newUser.role === "Professeur" && !newUser.dateRecrutement) || (newUser.role !== "Étudiant" && !newUser.entreprise)) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setNewUser({ name: "", prenom: "", email: "", role: "", entreprise: "", dateRecrutement: "" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setNewUser(userToEdit); // Remplir le formulaire avec les données de l'utilisateur à modifier
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); // Filtrer en fonction du rôle sélectionné
  };

  const filteredUsers = selectedRole === "all" ? users : users.filter(user => user.role === selectedRole);

  return (
    <div className="gestion-utilisateurs">
      <h2>Gestion des Utilisateurs</h2>

      {/* Formulaire d'ajout ou modification d'utilisateur */}
      <div className="formulaire-utilisateur">
        <h3>{newUser.id ? "Modifier un Utilisateur" : "Ajouter un Utilisateur"}</h3>
        <input
          type="text"
          placeholder="Nom"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={newUser.prenom}
          onChange={(e) => setNewUser({ ...newUser, prenom: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Choisir un rôle</option>
          <option value="Étudiant">Étudiant</option>
          <option value="Professeur">Professeur</option>
          <option value="Entreprise">Entreprise</option>
        </select>

        {(newUser.role === "Professeur" || newUser.role === "Entreprise") && (
          <>
            <input
              type="text"
              placeholder="Entreprise"
              value={newUser.entreprise}
              onChange={(e) => setNewUser({ ...newUser, entreprise: e.target.value })}
            />
            {newUser.role === "Professeur" && (
              <input
                type="date"
                placeholder="Date de recrutement"
                value={newUser.dateRecrutement}
                onChange={(e) => setNewUser({ ...newUser, dateRecrutement: e.target.value })}
              />
            )}
          </>
        )}

        <button onClick={addUser}>{newUser.id ? "Modifier" : "Ajouter"}</button>
      </div>

      {/* Sélection du type de rôle pour filtrer */}
      <div className="filter-role">
        <label>Filtrer par rôle :</label>
        <select onChange={handleRoleChange} value={selectedRole}>
          <option value="all">Tous</option>
          <option value="Étudiant">Étudiant</option>
          <option value="Professeur">Professeur</option>
          <option value="Entreprise">Entreprise</option>
        </select>
      </div>

      {/* Tableau des utilisateurs */}
      <h3>Liste des Utilisateurs</h3>
      <table className="table-utilisateurs">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Entreprise</th>
            <th>Date de recrutement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.entreprise}</td>
              <td>{user.dateRecrutement || "N/A"}</td>
              <td>
                <button onClick={() => editUser(user.id)} className="btn-edit">
                  Modifier
                </button>
                <button onClick={() => deleteUser(user.id)} className="btn-delete">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionUtilisateurs;
