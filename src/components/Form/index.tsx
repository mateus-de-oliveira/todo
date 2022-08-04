import { CreateButton } from "./CreateButton"
import { InputText } from "./InputText"
import styles from "./Form.module.css"
import { Container } from "../Container"
import { useTaskContext } from "../Tasks/Context"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export function Form() {
  const { taskPending, setTaskPending, setTasks, tasks } = useTaskContext()
  const [newTask, setNewTask] = useState("")

  const handleCreateTask = () => {
    event.preventDefault()

    const task = { id: uuidv4(), title: newTask, status: "pending" }

    setTasks([...tasks, task])
    setNewTask("")
  }

  const handleNewTaskChange = () => {
    setNewTask(event.target.value)
  }

  return (
    <Container>
      <form className={styles.form}>
        <InputText value={newTask} onChange={handleNewTaskChange} />
        <CreateButton onClick={handleCreateTask} />
      </form>
    </Container>
  )
}
