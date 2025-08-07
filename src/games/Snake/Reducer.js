import { BOARD_SIZE } from "./constants";
import { getRandomCell } from "./helpers";

export const initialState = {
  snake: [[10, 10]],
  direction: [1, 0],
  food: getRandomCell(),
  score: 0,
  isRunning: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...initialState, isRunning: true };

    case "STOP":
      return { ...state, isRunning: false };

    case "CHANGE_DIRECTION":
      return { ...state, direction: action.payload };

    case "MOVE": {
      const [dx, dy] = state.direction;
      const newHead = [state.snake[0][0] + dx, state.snake[0][1] + dy];

      const hitWall =
        newHead[0] < 0 || newHead[0] >= BOARD_SIZE ||
        newHead[1] < 0 || newHead[1] >= BOARD_SIZE;

      const hitSelf = state.snake.some(([x, y]) => x === newHead[0] && y === newHead[1]);

      if (hitWall || hitSelf) {
        return { ...state, isRunning: false };
      }

      const hasEaten = newHead[0] === state.food[0] && newHead[1] === state.food[1];
      const newSnake = [newHead, ...state.snake];
      if (!hasEaten) newSnake.pop();

      return {
        ...state,
        snake: newSnake,
        food: hasEaten ? getRandomCell() : state.food,
        score: hasEaten ? state.score + 1 : state.score,
      };
    }

    default:
      return state;
  }
}
