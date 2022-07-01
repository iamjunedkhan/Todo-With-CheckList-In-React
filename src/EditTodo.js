import React, { useContext } from 'react'
import { context } from "./App";

export default function EditTodo({todo}) {
  console.log(todo);
  const {handleEditBoxInput,hanldeEditOk} =useContext(context);
    return (
    <div className='fixed flex justify-center flex-col z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 w-4/5 py-9 px-4'  > 
        <h1 className='text-2xl font-bold m-4'>Edit Todo</h1>
        <form action="" onSubmit={(event)=>event.preventDefault()}>

        <input type="text" value={todo.title} autoFocus onChange={(event)=>handleEditBoxInput(event.target.value)} className='w-4/5 mx-auto px-2 py-1  outline-none border-none '  />
        <div className='flex justify-end'>
            <button type='submit' className='text-xl font-semibold bg-blue-400 my-5 mx-10 px-3 py-1 rounded ' onClick={hanldeEditOk}>Ok</button>
            {/* <button className='text-xl font-semibold bg-blue-400 my-5 mx-10 px-3 py-1 rounded '>Cancle</button> */}
        </div>
        </form>
    </div>

  )
}
