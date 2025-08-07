import { BOARD_SIZE } from "./constants";

export default function createCells(state) {
  const cells = [];
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      const isSnake = state.snake.some(([sx, sy]) => sx === x && sy === y);
      const isFood = state.food[0] === x && state.food[1] === y;
      cells.push(
        <div
          key={`${x}-${y}`}
          className={`celda ${isSnake ? "serpiente" : ""} ${isFood ? "comida" : ""}`}
        />
      );
    }
  }
  return cells;
}
