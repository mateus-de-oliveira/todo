import styles from "./TaskEmpty.module.css"
import imgClipboard from "../../../assets/img/clipboard.png"

export function TaskEmpty() {
  return (
    <div className={styles["taskEmpty--box"]}>
      <img src={imgClipboard} className={styles["taskEmpty--image"]} />
      <p>
        Você ainda não tem tarefas cadastradas
        <span className={styles["taskEmpty--title__secondary"]}>
          Crie tarefas e organize seus itens a fazer
        </span>
      </p>
    </div>
  )
}
