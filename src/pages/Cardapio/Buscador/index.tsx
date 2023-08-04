import styles from './Buscador.module.scss';

interface BuscadorProps {
  pesquisa: string;
  setPesquisa: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ pesquisa, setPesquisa }: BuscadorProps) {
  return (
    <div className={styles.buscador}>
      <input 
        value={pesquisa} 
        onChange={event => setPesquisa(event.target.value)} />
        
    </div>
  )
} 