import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  

const [todos, setTodos] = useState(['Go to the Gym',
'Eat more fruits and vegetables',
'Sleep Early'
])

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
      
    </>
  )
}

export default App
