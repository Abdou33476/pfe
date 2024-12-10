import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, userRole }) => {
  // Si l'utilisateur n'a pas le rôle autorisé, redirige vers la page d'accueil
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />; // Redirection vers la page d'accueil
  }

  return element; // Afficher le composant si l'utilisateur a le bon rôle
};

export default PrivateRoute;
