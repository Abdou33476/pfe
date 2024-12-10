import React, { useState } from "react";
import "./ParametrageEmails.css"; // Ajoutez un fichier CSS spécifique

const ParametrageEmails = () => {
  const [emailSettings, setEmailSettings] = useState({
    senderEmail: "",
    smtpServer: "",
    smtpPort: "",
  });

  const handleSave = () => {
    if (!emailSettings.senderEmail || !emailSettings.smtpServer || !emailSettings.smtpPort) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    alert("Paramètres enregistrés avec succès !");
  };

  return (
    <div className="parametrage-emails">
      <h2>Paramétrage des Emails</h2>
      <form className="form-email">
        <label>Email de l'expéditeur :</label>
        <input
          type="email"
          value={emailSettings.senderEmail}
          onChange={(e) =>
            setEmailSettings({ ...emailSettings, senderEmail: e.target.value })
          }
          placeholder="email@example.com"
        />

        <label>Serveur SMTP :</label>
        <input
          type="text"
          value={emailSettings.smtpServer}
          onChange={(e) =>
            setEmailSettings({ ...emailSettings, smtpServer: e.target.value })
          }
          placeholder="smtp.example.com"
        />

        <label>Port SMTP :</label>
        <input
          type="number"
          value={emailSettings.smtpPort}
          onChange={(e) =>
            setEmailSettings({ ...emailSettings, smtpPort: e.target.value })
          }
          placeholder="587"
        />

        <button type="button" onClick={handleSave}>
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default ParametrageEmails;
