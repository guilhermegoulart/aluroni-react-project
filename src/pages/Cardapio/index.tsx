import { useState } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Cardapio.module.scss";
import Filtros from "./Filtros";
import Buscador from "./Buscador";
import Ordenador from "./Ordenador";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Tradição e qualidade desde 1989.
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>

        <Buscador pesquisa={busca} setPesquisa={setBusca} />

        <div className={styles.cardapio__filtrosAndOrdenador}>
          <div className={styles.cardapio__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
          </div>
          <Ordenador />
        </div>
        
      </section>
    </main>
  );
}
