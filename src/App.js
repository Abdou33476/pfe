import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountTypeSelection from "./pages/AccountTypeSelection";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProfessorDashboard from "./pages/ProfessorDashboard";

function App() {
  const [userRole, setUserRole] = useState("admin"); // Simuler le rôle utilisateur, ici par défaut

  return (
    <Router>
      <Routes>
        {/* Route principale pour la sélection du type de compte */}
        <Route path="/" element={<AccountTypeSelection />} />
        
        {/* Route pour le tableau de bord étudiant */}
        <Route path="/student" element={<StudentDashboard />} />
        
        {/* Route pour le tableau de bord administrateur */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Route pour le tableau de bord professeur */}
        <Route path="/professor" element={<ProfessorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
