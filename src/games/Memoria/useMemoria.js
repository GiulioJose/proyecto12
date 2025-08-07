import { useState, useEffect } from "react";
import { generarCartasPreview, generarCartasJuego } from "./helpers";

export function useMemoria(numCartas, tiempo, jugadores) {
  const [cartasPreview, setCartasPreview] = useState([]);
  const [cartas, setCartas] = useState([]);
  const [enJuego, setEnJuego] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const [previewInicial, setPreviewInicial] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const [descubiertas, setDescubiertas] = useState([]);
  const [cartasAcertadas, setCartasAcertadas] = useState([]);
  const [turno, setTurno] = useState(1);
  const [puntos, setPuntos] = useState({ 1: 0, 2: 0 });

  useEffect(() => {
    if (!enJuego) {
      setCartasPreview(generarCartasPreview(numCartas));
    }
  }, [numCartas, tiempo, jugadores, enJuego]);

  useEffect(() => {
    if (
      cartas.length > 0 &&
      cartasAcertadas.length === cartas.length &&
      !juegoTerminado
    ) {
      setJuegoTerminado(true);
      setTimeout(() => alert("🎉 ¡Juego terminado!"), 100);
    }
  }, [cartasAcertadas, cartas.length, juegoTerminado]);

  function iniciarJuego() {
    const nuevasCartas = generarCartasJuego(numCartas);
    setCartas(nuevasCartas);
    setCartasAcertadas([]);
    setDescubiertas([]);
    setTurno(1);
    setPuntos({ 1: 0, 2: 0 });
    setEnJuego(true);
    setBloqueado(true);
    setPreviewInicial(true);
    setJuegoTerminado(false);

    setTimeout(() => {
      setBloqueado(false);
      setPreviewInicial(false);
    }, parseInt(tiempo) * 1000);
  }

  function manejarClick(indice) {
    if (bloqueado || descubiertas.find((c) => c.indice === indice) || cartasAcertadas.includes(indice)) return;

    const nuevaCarta = { indice, valor: cartas[indice] };
    const nuevas = [...descubiertas, nuevaCarta];
    setDescubiertas(nuevas);

    if (nuevas.length === 2) {
      setBloqueado(true);

      const [c1, c2] = nuevas;

      if (c1.valor === c2.valor) {
        setPuntos((prev) => ({
          ...prev,
          [turno]: prev[turno] + 2,
        }));

        setTimeout(() => {
          setCartasAcertadas((prev) => [...prev, c1.indice, c2.indice]);
          setDescubiertas([]);
          setBloqueado(false);
        }, 600);
      } else {
        setPuntos((prev) => ({
          ...prev,
          [turno]: prev[turno] - 1,
        }));
        setTimeout(() => {
          setDescubiertas([]);
          setBloqueado(false);
          if (parseInt(jugadores) === 2) {
            setTurno((t) => (t === 1 ? 2 : 1));
          }
        }, 1000);
      }
    }
  }

  function reiniciar() {
    setCartas([]);
    setCartasPreview(generarCartasPreview(numCartas));
    setDescubiertas([]);
    setCartasAcertadas([]);
    setTurno(1);
    setPuntos({ 1: 0, 2: 0 });
    setEnJuego(false);
    setBloqueado(false);
    setPreviewInicial(false);
    setJuegoTerminado(false);
  }

  return {
    cartasPreview,
    cartas,
    enJuego,
    bloqueado,
    previewInicial,
    descubiertas,
    cartasAcertadas,
    turno,
    puntos,
    iniciarJuego,
    manejarClick,
    reiniciar,
  };
}
