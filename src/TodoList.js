import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    <div className='bg-red-300 my-3 ' style={{overflowY:'auto',height:'500px'}}>
      <h1 className='font-semibold text-2xl m-3'>Your Todos</h1>
      {todos.map(todo => {
        return (!todo.status) && <Todo todo={todo} key={todo.id} />
      })}
      <hr />
      
      {todos.map(todo => {
        return (todo.status) && <Todo todo={todo} key={todo.id} />
      })}
    </div>
  )
}
