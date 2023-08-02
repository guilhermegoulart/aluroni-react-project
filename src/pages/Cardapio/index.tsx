import styles from './Cardapio.module.scss';
import {ReactComponent as Logo } from 'assets/logo.svg'

export default function Cardapio() {
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
    </main>
  )
}