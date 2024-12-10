import React from "react";
import { useNavigate } from "react-router-dom"; // Si vous utilisez react-router-dom pour la navigation

const AccountTypeSelection = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleAccountSelection = (role) => {
    navigate(`/${role}`); // Naviguer vers la route spécifique au rôle
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Bienvenue !</h1>
      <p>Veuillez choisir le type de compte pour continuer :</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handleAccountSelection("professor")}
          style={{
            margin: "10px",
            padding: "15px 30px",
            backgroundColor: "#004000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Professeur
        </button>
        <button
          onClick={() => handleAccountSelection("student")}
          style={{
            margin: "10px",
            padding: "15px 30px",
            backgroundColor: "#004000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Étudiant
        </button>
        <button
          onClick={() => handleAccountSelection("admin")}
          style={{
            margin: "10px",
            padding: "15px 30px",
            backgroundColor: "#004000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Administrateur
        </button>
      </div>
    </div>
  );
};

export default AccountTypeSelection;
