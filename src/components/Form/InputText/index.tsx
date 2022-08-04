import styles from "./InputText.module.css"

export function InputText(props) {
  return (
    <>
      <input
        placeholder='Adicione uma nova tarefa'
        className={styles.input}
        type={"text"}
        {...props}
      />
    </>
  )
}
