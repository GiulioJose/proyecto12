const EMOJIS = ["🍒", "🥑", "🍄", "🍏", "🍉", "🥕", "🍍", "🍇"];

export function generarCartasPreview(numCartas) {
  const pares = parseInt(numCartas) / 2;
  const seleccion = [...EMOJIS].sort(() => 0.5 - Math.random()).slice(0, pares);
  const temp = [...seleccion, ...seleccion].sort(() => 0.5 - Math.random());
  return temp;
}

export function generarCartasJuego(numCartas) {
  const pares = parseInt(numCartas) / 2;
  const seleccion = [...EMOJIS].sort(() => 0.5 - Math.random()).slice(0, pares);
  const mezcladas = [...seleccion, ...seleccion].sort(() => 0.5 - Math.random());
  return mezcladas;
}
