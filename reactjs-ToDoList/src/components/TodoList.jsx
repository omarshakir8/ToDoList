import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        'Go to the Gym',
        'Eat more fruits and vegetables',
        'Sleep Early'
    
    ]


  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>


                </TodoCard>
            )
        })}
    </ul>
  )
}
