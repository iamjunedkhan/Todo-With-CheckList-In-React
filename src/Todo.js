import React,{useContext} from 'react'
import { context } from "./App";


export default function Todo({ todo }) {
    const {handleDelete,changeCheckBox,handleEditPen} =  useContext(context)
    return (
        <div className='text-xl flex justify-between py-3 px-8 '>
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
}
