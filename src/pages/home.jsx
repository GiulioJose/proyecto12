import { useNavigate } from "react-router-dom";
import "../styles/pages/Home.scss";
import { juegos } from "../data/juegos";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      {juegos.map((juego) => (
        <article
          className="juego"
          key={juego.id}
          onClick={() => navigate(`/${juego.id}`)}
        >
          <img
            src={juego.src}
            alt={juego.alt}
            data-juego={juego.id}
            className="mini"
          />
          <p>{juego.alt}</p>
        </article>
      ))}
    </section>
  );
}
