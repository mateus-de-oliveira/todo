import { Header } from "./components/Header"
import { Form } from "./components/Form"

import "./assets/css/global.css"
import { Tasks } from "./components/Tasks"
import { TaskProvider } from "./components/Tasks/Context"

function App() {
  return (
    <div>
      <TaskProvider>
        <Header />

        <Form />
        <Tasks />
      </TaskProvider>
    </div>
  )
}

export default App
