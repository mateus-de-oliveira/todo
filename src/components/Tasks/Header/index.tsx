import React, { useEffect } from "react"
import styles from "./Header.module.css"
import { Badge } from "../../Badge"
import { useTaskContext } from "../Context"
import _ from "lodash"
import { useState } from "react"

export function Header() {
  const { tasks } = useTaskContext()
  const [tasksStatus, setTasksStatus] = useState({})

  useEffect(() => {
    setTasksStatus(_.countBy(tasks.flatMap((task) => task.status)))
  }, [tasks])

  return (
    <>
      <div className={styles.header}>
        <div className={styles["header--section"]}>
          <span
            className={`${styles["header--title"]} ${styles["header--title__created"]}`}
          >
            Tarefas criadas
          </span>
          <Badge>{!tasksStatus.pending ? 0 : tasksStatus.pending}</Badge>
        </div>
        <div className={styles["header--section"]}>
          <span
            className={`${styles["header--title"]} ${styles["header--title__done"]}`}
          >
            Concluídas
          </span>
          <Badge>{!tasksStatus.completed ? 0 : tasksStatus.completed}</Badge>
        </div>
      </div>
    </>
  )
}
