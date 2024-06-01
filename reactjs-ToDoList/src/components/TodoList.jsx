import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the Gym',
        'Eat more fruits and vegetables',
        'Sleep Early'
    
    ]


  return (
    <ul>
        {todos.map((todo, todoIndex) => {
            return (
                <li key={todo}>{todo}</li>
            )
        })}
    </ul>
  )
}
