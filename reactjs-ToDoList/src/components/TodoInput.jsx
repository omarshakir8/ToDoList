import { useState } from "react"

export default function TodoInput(props){
    const { handleAddTodo, todoValue, setTodoValue } = props
    return (
        <header>
            <input value={todoValue} onChange= {(e) => {setTodoValue(e.target.value)}} placeholder="Enter To do........"/>
            <button onClick={() => {
                handleAddTodos(todoValue)
            }}>Add</button>
        </header>
    )
}