import { useEffect, useReducer, useState } from "react";
import reducer, { initialState } from "./Reducer";
import { DIRECTIONS } from "./constants";
import createCells from "./createCells";

export default function Snake() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [maxScore, setMaxScore] = useState(0);
  const [pressedKey, setPressedKey] = useState(null);

  // Movimiento automático
  useEffect(() => {
    if (!state.isRunning) return;
    const interval = setInterval(() => {
      dispatch({ type: "MOVE" });
    }, 200);
    return () => clearInterval(interval);
  }, [state.isRunning, state.direction, state.snake]);

  // Manejo del teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!DIRECTIONS[e.key]) return;
      dispatch({ type: "CHANGE_DIRECTION", payload: DIRECTIONS[e.key] });
      setPressedKey(e.key); // ← MARCA PRESIONADA
    };
  
    const handleKeyUp = (e) => {
      if (DIRECTIONS[e.key]) {
        setPressedKey(null); // ← QUITA LA CLASE AL SOLTAR
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Actualizar maxScore si se supera
  useEffect(() => {
    if (state.score > maxScore) {
      setMaxScore(state.score);
    }
  }, [state.score]);

  // Alerta al perder
  useEffect(() => {
    if (!state.isRunning && state.score > 0) {
      alert("Juego terminado");
    }
  }, [state.isRunning]);

  return (
    <div className="snake">
      <div className="info-snake">
        <h2>Snake Game</h2>
        <p id="puntuacion">Puntuación: {state.score}</p>
        <p id="record">Máximo récord: {maxScore}</p> {/* 👈 USAMOS useState */}

        <div id="botones-wrap">
          <button onClick={() => dispatch({ type: "START" })}>Start</button>
          <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
        </div>

        <div id="controles">
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_DIRECTION",
                  payload: DIRECTIONS["ArrowUp"],
                })
              }
              onMouseDown={() => setPressedKey("ArrowUp")}
              onMouseUp={() => setPressedKey(null)}
              className={pressedKey === "ArrowUp" ? "presionado" : ""}
            >
              ⬆️
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_DIRECTION",
                  payload: DIRECTIONS["ArrowLeft"],
                })
              }
              onMouseDown={() => setPressedKey("ArrowLeft")}
              onMouseUp={() => setPressedKey(null)}
              className={pressedKey === "ArrowLeft" ? "presionado" : ""}
            >
              ⬅️
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_DIRECTION",
                  payload: DIRECTIONS["ArrowDown"],
                })
              }
              onMouseDown={() => setPressedKey("ArrowDown")}
              onMouseUp={() => setPressedKey(null)}
              className={pressedKey === "ArrowDown" ? "presionado" : ""}
            >
              ⬇️
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_DIRECTION",
                  payload: DIRECTIONS["ArrowRight"],
                })
              }
              onMouseDown={() => setPressedKey("ArrowRight")}
              onMouseUp={() => setPressedKey(null)}
              className={pressedKey === "ArrowRight" ? "presionado" : ""}
            >
              ➡️
            </button>
          </div>
        </div>

      </div>

      <div className="juego-snake">{createCells(state)}</div>
    </div>
  );
}
