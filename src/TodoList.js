import React from 'react'
import Todo from './Todo'
import FlipMove from 'react-flip-move';

export default function TodoList({ todos }) {
  return (
    <div className=' my-3 ' style={{overflowY:'auto',height:'500px'}}>
      <h1 className='font-semibold text-2xl m-3'>Your Todos</h1>
      <FlipMove>{todos.map(todo => {
        return (!todo.status) && <Todo todo={todo} key={todo.id} />
      })}</FlipMove>
      

<FlipMove>
{todos.map(todo => {
        return (todo.status) && <Todo todo={todo} key={todo.id} />
      })}
</FlipMove>
      
    </div>
  )
}

