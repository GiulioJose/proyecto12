export const initialState = {
  turno: "X",
  puntosX: 0,
  puntosO: 0,
  juegoTerminado: false,
  tablero: Array(9).fill(""),
  casillasGanadoras: []
};

import { verificarGanador } from "./verificarGanador";

export function reducer(state, action) {
  switch (action.type) {
    case "MARCAR_CASILLA": {
      const { index } = action.payload;
      if (state.tablero[index] !== "" || state.juegoTerminado) return state;

      const nuevoTablero = [...state.tablero];
      nuevoTablero[index] = state.turno;

      const ganador = verificarGanador(nuevoTablero);
      if (ganador) {
        return {
          ...state,
          tablero: nuevoTablero,
          juegoTerminado: true,
          casillasGanadoras: ganador,
          puntosX: state.turno === "X" ? state.puntosX + 1 : state.puntosX,
          puntosO: state.turno === "O" ? state.puntosO + 1 : state.puntosO,
        };
      }

      const empate = nuevoTablero.every((cell) => cell !== "");
      if (empate) {
        return {
          ...state,
          tablero: nuevoTablero,
          juegoTerminado: true,
        };
      }

      return {
        ...state,
        tablero: nuevoTablero,
        turno: state.turno === "X" ? "O" : "X",
      };
    }

    case "REINICIAR_JUEGO":
      return {
        ...state,
        tablero: Array(9).fill(""),
        casillasGanadoras: [],
        juegoTerminado: false,
        turno: "X"
      };

    case "RESET_MARCADOR":
      return {
        turno: "X",
        puntosX: 0,
        puntosO: 0,
        juegoTerminado: false,
        tablero: Array(9).fill(""),
        casillasGanadoras: []
      };

    default:
      return state;
  }
}
