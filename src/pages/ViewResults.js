import React from "react";
import "./ViewResults.css";

const ViewResults = () => {
  return (
    <div className="view-results">
      <h2>Consulter les Résultats</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Matière</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathématiques</td>
            <td>18/20</td>
          </tr>
          <tr>
            <td>Intelligence Artificielle</td>
            <td>16/20</td>
          </tr>
          <tr>
            <td>Développement Web</td>
            <td>15/20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewResults;
