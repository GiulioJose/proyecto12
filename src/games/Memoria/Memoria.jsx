import React, { useState } from "react";
import GrupoOpciones from "./GrupoOpciones";
import Tablero from "./Tablero";
import { useMemoria } from "./useMemoria.js";

const opcionesCartas = ["8", "12", "16"];
const opcionesTiempo = ["5", "8", "12"];
const opcionesJugadores = ["1", "2"];

const Memoria = () => {
  const [numCartas, setNumCartas] = useState("8");
  const [tiempo, setTiempo] = useState("5");
  const [jugadores, setJugadores] = useState("1");

  const {
    cartasPreview,
    cartas,
    enJuego,
    previewInicial,
    descubiertas,
    cartasAcertadas,
    turno,
    puntos,
    iniciarJuego,
    manejarClick,
    reiniciar,
  } = useMemoria(numCartas, tiempo, jugadores);

  function reiniciarJuego() {
    setNumCartas("8");
    setTiempo("5");
    setJugadores("1");
    reiniciar();
  }
  

  return (
    <>
      <div className="info-memo">
        <h2>🧠 Memoria</h2>

        <div id="menu">
          <GrupoOpciones
            label="N° de cartas:"
            opciones={opcionesCartas}
            dataKey="cartas"
            valorActivo={numCartas}
            setValor={setNumCartas}
            disabled={enJuego}
          />
          <GrupoOpciones
            label="Tiempo (seg):"
            opciones={opcionesTiempo}
            dataKey="tiempo"
            valorActivo={tiempo}
            setValor={setTiempo}
            disabled={enJuego}
          />
          <GrupoOpciones
            label="Jugadores:"
            opciones={opcionesJugadores}
            dataKey="jugadores"
            valorActivo={jugadores}
            setValor={setJugadores}
            disabled={enJuego}
          />

          <button
            id="iniciarJuego"
            onClick={enJuego ? reiniciarJuego : iniciarJuego}
          >
            {enJuego ? "Reiniciar partida" : "Comenzar partida"}
          </button>
        </div>

        <div id="infoJuego">
          <p id="turnoActual">Turno de: Jugador {turno}</p>
          <p>
            Puntos: Jug. 1: <span id="puntosJ1">{puntos[1]}</span> | Jug. 2:{" "}
            <span id="puntosJ2">{puntos[2]}</span>
          </p>
        </div>
      </div>

      <div className="juego-memo">
        <Tablero
          cartas={cartas}
          previewCartas={cartasPreview}
          enJuego={enJuego}
          previewInicial={previewInicial}
          numCartas={numCartas}
          descubiertas={descubiertas}
          cartasAcertadas={cartasAcertadas}
          manejarClick={manejarClick}
        />
      </div>
    </>
  );
};

export default Memoria;

