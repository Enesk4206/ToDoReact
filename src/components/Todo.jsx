import React, { useRef } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {
    const inputRef = useRef();
    const addTask = ()=>{
        const inputText = inputRef.current.value;
        console.log(inputText);
    }


  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>
      <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/*------title-------- */}
        <div className='flex items-center mt-7 gap-2'> 
          <img src="/todo_icon.png" alt="icon todo list" className='w-8' />
          <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
          <input ref={inputRef} type="text" className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' placeholder='Add your task' />
          <button onClick={addTask} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add Task</button>
        </div>
        


        {/*---------todo items */}
        <div>
            <TodoItems text={"learn coding"}/>
            <TodoItems text={"lean more tech"}/>
            <TodoItems text={"just learn!!"}/>
        </div>



      </div>
    </div>  
  )
}

export default Todo