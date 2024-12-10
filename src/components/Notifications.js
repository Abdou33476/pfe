import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import "./Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Votre sujet a été approuvé.", read: false },
    { id: 2, text: "Un nouveau thème est disponible.", read: false },
    { id: 3, text: "Rappel : Soutenance demain à 10h.", read: true },
  ]);
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => setShowPopup(!showPopup);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notification-container">
      {/* Bouton de notification avec badge */}
      <button className="notification-button" onClick={handleTogglePopup}>
        <FaBell />
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {/* Popup des notifications */}
      {showPopup && (
        <div className="notification-popup">
          <h4>Notifications</h4>
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={notification.read ? "" : "unread"}
                onClick={() => {
                  // Marquer comme lu
                  setNotifications(
                    notifications.map((n) =>
                      n.id === notification.id ? { ...n, read: true } : n
                    )
                  );
                }}
              >
                <img src="/default-profile.png" alt="Icone" />
                {notification.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
