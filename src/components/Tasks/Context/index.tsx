import React, { useState, useEffect, createContext, useContext } from "react"

const Context = createContext()
export const useTaskContext = () => useContext(Context)

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <Context.Provider
      value={{
        tasks,

        setTasks,
      }}
    >
      {children}
    </Context.Provider>
  )
}
