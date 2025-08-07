import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./GameReducer";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";

export default function TresEnRaya() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mensaje, setMensaje] = useState("");

  const marcarCasilla = (index) => {
    dispatch({ type: "MARCAR_CASILLA", payload: { index } });
  };

  const comprobarFinJuego = () => {
    if (state.juegoTerminado && state.casillasGanadoras.length > 0) {
      setMensaje(`¡Ganó ${state.turno}!`);
    } else {
      setMensaje("");
    }
  };

  const handleClick = (index) => {
    marcarCasilla(index);
    setTimeout(comprobarFinJuego, 0); // esperar al próximo render
  };

  const reiniciarJuego = () => {
    dispatch({ type: "REINICIAR_JUEGO" });
    setMensaje("");
  };

  const resetMarcador = () => {
    dispatch({ type: "RESET_MARCADOR" });
    setMensaje("");
  };

  return (
    <>
      <GameInfo
        turno={state.turno}
        puntosX={state.puntosX}
        puntosO={state.puntosO}
        onReiniciar={reiniciarJuego}
        onReset={resetMarcador}
      />

      {mensaje && <div className="mensaje-juego">{mensaje}</div>}

      <GameBoard
        tablero={state.tablero}
        casillasGanadoras={state.casillasGanadoras}
        onClick={handleClick}
      />
    </>
  );
}
