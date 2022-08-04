import { Container } from "../Container"
import { Header } from "./Header"
import { TaskList } from "./TaskList"

export function Tasks() {
  return (
    <Container>
      <Header />
      <TaskList />
    </Container>
  )
}
