import React,{useContext,forwardRef } from 'react'
import { context } from "./App";


const  Todo=forwardRef(({ todo },ref)=> {
    const {handleDelete,changeCheckBox,handleEditPen} =  useContext(context)
    return (
        <div ref={ref} className={`text-xl ${!todo.status?'bg-red-300':'bg-green-300' } my-2 flex justify-between py-3 px-8 `}>
            <div>
                <input type="checkbox" defaultChecked={todo.status} onChange={()=>changeCheckBox(todo.id)} className='mr-5' name="" id="" />
                <span>{todo.title}</span>
            </div>
            <div>
                <span className='mx-2' style={{ cursor: 'pointer' }} onClick={()=>handleEditPen(todo.id)}>&#x270E;</span>
                <span className='mx-2' style={{cursor:'pointer'}} onClick={()=>handleDelete(todo.id)} ><i className="fa fa-trash-o" aria-hidden="true"></i></span>
            </div>
        </div>

    )
})
export default Todo;
