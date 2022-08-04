import plus from "../../../assets/img/plus.png"
import styles from "./CreateButton.module.css"

export function CreateButton(props) {
  return (
    <button className={styles.button} {...props}>
      <span>Criar</span>
      <img className={styles.img} src={plus} />
    </button>
  )
}
