import React from "react";

export default function GameInfo({ turno, puntosX, puntosO, onReiniciar, onReset }) {
  return (
    <div className="info-ter">
      <h2>Tres en Raya</h2>

      <div id="marcador">
        <p>
          X: <span id="puntosX">{puntosX}</span> | O: <span id="puntosO">{puntosO}</span>
        </p>
      </div>

      <div id="turnoActual">Turno de: {turno}</div>

      <button id="reiniciar" onClick={onReiniciar}>
        Reiniciar partida
      </button>
      <button id="resetMarcador" onClick={onReset}>
        Reiniciar marcador
      </button>
    </div>
  );
}
