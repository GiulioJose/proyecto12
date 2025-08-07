import { BOARD_SIZE } from "./constants";

export const getRandomCell = () => [
  Math.floor(Math.random() * BOARD_SIZE),
  Math.floor(Math.random() * BOARD_SIZE),
];
