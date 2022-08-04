import Logo from "../../assets/img/logo.png"
import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt='Logo' />
    </header>
  )
}
