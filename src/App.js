import './App.css';
import TodoList from './TodoList';
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditTodo from './EditTodo';
import FlipMove from 'react-flip-move';
export const context = React.createContext();
const LOCAL_STORAGE_KEY = 'notes';

function App() {
  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) === null
      ? [] : JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  const [inputValue, setInputValue] = useState('')
  const [selectedTodo, setSelectedTodo] = useState(undefined)
  const [selectTodoId, setselectTodoId] = useState(undefined)
  const handleAddNotes = () => {
    const newNote = {
      id: uuidv4(),
      title: inputValue,
      status: false

    }
    if (inputValue !== '') {
      setNotes([...notes, newNote]);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...notes, newNote]));
    }
    setInputValue('');
  }
  const handleDelete = (id) => {
    const temp=notes.filter(n => n.id !== id);
    setNotes(temp)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temp));
  }
  const changeCheckBox = (id) => {
    const tempNotes = notes;
    const index = tempNotes.findIndex(e => e.id === id);
    tempNotes[index].status = !tempNotes[index].status;
    setNotes([...tempNotes]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }
  const handleEditPen =(id)=>{
    setSelectedTodo(...notes.filter(n=>n.id===id));
    setselectTodoId(id);
  }
  const handleEditBoxInput=(v)=>{
        const temp = notes;
        const index = temp.findIndex(r=>r.id===selectTodoId);
        temp[index].title=v;
        setNotes([...temp]);
        console.log(notes);
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(notes));
        
  }
  const hanldeEditOk=()=>{
    setSelectedTodo(undefined);
    setselectTodoId(undefined);
  }
  const value = {
    handleDelete,
    changeCheckBox,
    handleEditPen,
    handleEditBoxInput,
    hanldeEditOk
  }

  return (

    <div className="fixed  top-24 left-1/2  -translate-x-1/2 md:w-1/2 w-90 ">
      <context.Provider value={value}>
        <div className='bg-red-300 w-full inline-block text-center p-2' >
          <h1 className="text-3xl font-semibold ">My ToDo</h1>
          <form onSubmit={(event) => { event.preventDefault() }}>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} className='w-3/4 px-2 py-1  outline-none border-none m-2' placeholder='Add Todo' />
            <button type='submit' onClick={handleAddNotes} className='border-2 px-3 hover:py-2 hover:px-4 transition-all  py-1 border-white text-white f'>Add</button>
          </form>
        </div>
      
        <TodoList todos={notes} />
      

        
       {selectedTodo && <EditTodo todo={selectedTodo} />}
      </context.Provider>
    </div>
  );
}

export default App;
