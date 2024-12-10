import React, { useState } from "react";
import "./ChooseSubjects.css";

const ChooseSubjects = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [availableSubjects] = useState([
    { value: "math", label: "Mathématiques" },
    { value: "ai", label: "Intelligence Artificielle" },
    { value: "web", label: "Développement Web" },
    { value: "cloud", label: "Cloud Computing" },
    { value: "data", label: "Science des Données" },
    { value: "robotics", label: "Robotique" },
    { value: "security", label: "Cybersécurité" },
    { value: "mobile", label: "Développement Mobile" },
    { value: "iot", label: "Internet des Objets" },
    { value: "ux", label: "Design UX/UI" },
    { value: "blockchain", label: "Blockchain" },
  ]);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    if (
      !selectedSubjects.includes(selectedValue) &&
      selectedSubjects.length < 10
    ) {
      setSelectedSubjects([...selectedSubjects, selectedValue]);
    }
  };

  const handleRemove = (subject) => {
    setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
  };

  const handleConfirm = () => {
    alert("Vos choix ont été confirmés : " + selectedSubjects.join(", "));
  };

  return (
    <div className="choose-subjects">
      <h2>Choisir des Matières</h2>
      <form className="subjects-form">
        <label htmlFor="subjects">Matières disponibles :</label>
        <select id="subjects" onChange={handleSelect}>
          <option value="">-- Sélectionnez une matière --</option>
          {availableSubjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>

        <div className="selected-list">
          <h3>Liste des vœux :</h3>
          <ul>
            {selectedSubjects.map((subject) => (
              <li key={subject}>
                {availableSubjects.find((item) => item.value === subject)?.label}
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemove(subject)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          disabled={selectedSubjects.length === 0}
        >
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default ChooseSubjects;
