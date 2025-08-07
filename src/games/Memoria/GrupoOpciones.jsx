// src/games/Memoria/GrupoOpciones.jsx
import React from "react";

const GrupoOpciones = ({ label, opciones, dataKey, valorActivo, setValor, disabled = false }) => {
  return (
    <div className="grupo-opciones">
      <label>{label}</label>
      <div className="opciones" id={`opciones${capitalize(dataKey)}`}>
        {opciones.map((valor) => (
          <button
            key={valor}
            className={valor === valorActivo ? "activo" : ""}
            {...{ [`data-${dataKey}`]: valor }}
            onClick={() => setValor(valor)}
            disabled={disabled}
          >
            {valor}
          </button>
        ))}
      </div>
    </div>
  );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default GrupoOpciones;
