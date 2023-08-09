import styles from './Filtros.module.scss';
import filtros  from './filtros.json'

type IOpcao = typeof filtros[0];

export default function Filtros() {
  function SelecionarFiltro(opcao: IOpcao) {
    console.log('Filtro selecionado');
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button className={styles.filtros__filtro} key={opcao.id} onClick={() => SelecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  )
}