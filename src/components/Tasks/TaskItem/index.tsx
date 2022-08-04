import styles from "./TaskItem.module.css"
import iconDeleteTask from "../../../assets/img/delete.svg"
import iconCheckTask from "../../../assets/img/checkTask.svg"
import { useTaskContext } from "../Context"
import { useState } from "react"

export function TaskItem({ id, title, status }) {
  const { tasks, setTasks } = useTaskContext()
  const [checked, setChecked] = useState(false)

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  const handleCheckTask = (id) => {
    const isChecked = !checked

    setChecked(isChecked)

    if (isChecked) {
      const newTasks = tasks.map((task) => {
        console.log("opa")
        if (task.id == id) {
          task.status = "completed"
        }

        return task
      })

      setTasks(newTasks)
    } else {
      const newTasks = tasks.map((task) => {
        console.log("opa")
        if (task.id == id) {
          task.status = "pending"
        }

        return task
      })

      setTasks(newTasks)
    }
  }

  return (
    <div
      className={checked ? styles["task--item__checked"] : styles["task--item"]}
    >
      <div className={styles["task--item__box"]}>
        <span
          className={
            checked
              ? styles["task--item__completed"]
              : styles["task--item__checkIcon"]
          }
          onClick={() => handleCheckTask(id)}
        >
          {checked && <img src={iconCheckTask} alt='' />}
        </span>
        <label className={styles["task--item__title"]}>{title}</label>
      </div>
      <img
        src={iconDeleteTask}
        className={styles["task--item__deleteIcon"]}
        onClick={() => handleDeleteTask(id)}
      />
    </div>
  )
}
