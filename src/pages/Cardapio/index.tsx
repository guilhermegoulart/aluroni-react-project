import { useState } from 'react';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import {ReactComponent as Logo } from 'assets/logo.svg'

export default function Cardapio() {
  const [busca, setBusca] = useState('');

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
        <h3 className={styles.cardapio__titulo}>
          Cardapio
        </h3>
        <Buscador 
          pesquisa={busca} 
          setPesquisa={setBusca}
        />
      </section>
    </main>
  )
}