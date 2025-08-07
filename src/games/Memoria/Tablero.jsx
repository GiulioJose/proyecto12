import React from "react";

const Tablero = ({
  cartas,
  previewCartas,
  enJuego,
  previewInicial,
  numCartas,
  descubiertas,
  cartasAcertadas,
  manejarClick,
}) => {
  const cartasMostradas = enJuego ? cartas : previewCartas;

  return (
    <div
      id="tablero"
      style={{ gridTemplateColumns: `repeat(${+numCartas <= 8 ? 4 : 6}, 1fr)` }}
    >
      {cartasMostradas.map((emoji, i) => {
        const estaDestapada =
          enJuego &&
          (previewInicial ||
            descubiertas.some((c) => c.indice === i) ||
            cartasAcertadas.includes(i));

        return (
          <div
            key={i}
            className={`carta ${estaDestapada ? "destapada" : "tapada"}`}
            data-indice={i}
            onClick={() => enJuego && manejarClick(i)}
          >
            {estaDestapada ? emoji : "❓"}
          </div>
        );
      })}
    </div>
  );
};

export default Tablero;
