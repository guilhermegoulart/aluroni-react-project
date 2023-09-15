import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg'

interface BuscadorProps {
  pesquisa: string;
  setPesquisa: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ pesquisa, setPesquisa }: BuscadorProps) {
  return (
    <div className={styles.buscador}>
      <input 
        value={pesquisa} 
        placeholder="Buscar"
        onChange={event => setPesquisa(event.target.value)} />
        < CgSearch size={20} color="#4C4D5E"/>
    </div>
  )
} 