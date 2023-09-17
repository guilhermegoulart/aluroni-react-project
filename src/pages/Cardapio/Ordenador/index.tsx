import { useState } from "react";
import styles from "./Ordenador.module.scss"
import opcoes from "./opcoes.json";

export default function Ordenador() {
  const [aberto, setAberto] = useState(false);

  return (
    <button className={styles.ordenador} onClick={() => setAberto(!aberto)}>
      <span>Ordenar Por</span>
      <div className={styles.ordenador__options}>
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option} key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
