export function verificarGanador(celdas) {
  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of combinaciones) {
    if (celdas[a] && celdas[a] === celdas[b] && celdas[a] === celdas[c]) {
      return [a, b, c]; // Devuelve índices ganadores
    }
  }

  return null;
}
