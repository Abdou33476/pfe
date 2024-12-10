import React, { useState, useEffect } from "react";
import axios from "axios"; // Assurez-vous d'avoir installé axios pour les requêtes HTTP
import "./PreferencesJury.css";

const PreferencesJury = () => {
  const [themes, setThemes] = useState([]); // Stocker les thèmes depuis la base de données
  const [selectedThemes, setSelectedThemes] = useState([]); // Stocker les thèmes sélectionnés
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [successMessage, setSuccessMessage] = useState(""); // Message de succès

  // Récupérer les thèmes depuis la base de données
  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get("/api/themes"); // Remplacez par votre URL d'API
        setThemes(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des thèmes :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/jury-themes", { themes: selectedThemes }); // Remplacez par votre URL d'API
      setSuccessMessage("Vos préférences ont été enregistrées avec succès !");
      setSelectedThemes([]); // Réinitialiser les thèmes sélectionnés après soumission
    } catch (error) {
      console.error("Erreur lors de l'enregistrement des préférences :", error);
    }
  };

  // Gestion de la sélection des thèmes
  const handleThemeSelection = (themeId) => {
    if (selectedThemes.includes(themeId)) {
      setSelectedThemes(selectedThemes.filter((id) => id !== themeId));
    } else {
      setSelectedThemes([...selectedThemes, themeId]);
    }
  };

  return (
    <div className="preferences-jury-container">
      <h2>Préférences de Jury</h2>
      {loading ? (
        <p>Chargement des thèmes...</p>
      ) : (
        <form className="preferences-jury-form" onSubmit={handleSubmit}>
          <div className="themes-list">
            {themes.map((theme) => (
              <div key={theme.id} className="theme-item">
                <label>
                  <input
                    type="checkbox"
                    value={theme.id}
                    checked={selectedThemes.includes(theme.id)}
                    onChange={() => handleThemeSelection(theme.id)}
                  />
                  {theme.title}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="submit-button">
            Soumettre
          </button>
        </form>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default PreferencesJury;
