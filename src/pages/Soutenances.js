import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Soutenances.css";

const Soutenances = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const soutenances = [
    { date: "2024-12-15", jury: "Prof. abderahmen", student: "Belaid Mohammed Nadir", room: "B101" },
    { date: "2024-12-20", jury: "Prof. Fatima", student: "Amina Benali", room: "C202" },
  ];

  const filteredSoutenances = soutenances.filter(
    (soutenance) => soutenance.date === selectedDate.toISOString().split("T")[0]
  );

  return (
    <div className="soutenances-container">
      <h2>Calendrier des Soutenances</h2>
      <div className="calendar-container">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date, view }) => {
            if (
              soutenances.find(
                (soutenance) => soutenance.date === date.toISOString().split("T")[0]
              )
            ) {
              return "highlight";
            }
          }}
        />
      </div>
      <div className="soutenances-details">
        <h3>Détails des Soutenances</h3>
        {filteredSoutenances.length > 0 ? (
          filteredSoutenances.map((soutenance, index) => (
            <div key={index} className="soutenance-card">
              <p><strong>Date :</strong> {soutenance.date}</p>
              <p><strong>Jury :</strong> {soutenance.jury}</p>
              <p><strong>Étudiant :</strong> {soutenance.student}</p>
              <p><strong>Salle :</strong> {soutenance.room}</p>
            </div>
          ))
        ) : (
          <p>Aucune soutenance prévue pour cette date.</p>
        )}
      </div>
    </div>
  );
};

export default Soutenances;
