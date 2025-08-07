import React from "react";

export default function GameBoard({ tablero, casillasGanadoras, onClick }) {
  return (
    <div className="juego-ter">
      <div className="tablero">
        {tablero.map((valor, i) => (
          <div
            key={i}
            className={`casilla ${valor ? "ocupada" : ""} ${
              casillasGanadoras.includes(i) ? "ganadora" : ""
            }`}
            data-indice={i}
            onClick={() => onClick(i)}
          >
            {valor}
          </div>
        ))}
      </div>
    </div>
  );
}
