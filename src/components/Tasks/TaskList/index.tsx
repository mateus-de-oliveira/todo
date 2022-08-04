import { useEffect, useState } from "react"
import { useTaskContext } from "../Context"
import { isEmpty } from "lodash"
import { TaskEmpty } from "../TaskEmpty"
import { TaskItem } from "../TaskItem"

export function TaskList() {
  const { taskPending, taskCompleted, tasks } = useTaskContext()
  console.log(tasks)
  return isEmpty(tasks) ? (
    <TaskEmpty />
  ) : (
    tasks.map((task) => {
      return (
        <TaskItem
          key={task.id}
          title={task.title}
          id={task.id}
          status={task.status}
        />
      )
    })
  )
}
