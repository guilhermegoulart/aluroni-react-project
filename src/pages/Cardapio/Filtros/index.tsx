import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";
import classNames from "classnames";
type IOpcao = (typeof filtros)[0];

interface FiltrosProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {
  function SelecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) {
      return setFiltro(null);
    }
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--selecionado"]]: filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => SelecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
