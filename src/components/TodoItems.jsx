import React from 'react'

const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src="/tick.png" alt="check icon image" className='w-7' />
            <p className='text-slate-700 ml-4 text-2xl tracking-tighter'>{text}</p>
        </div>
        <img src="/delete.png" alt="delete icon image" className='w-3.5' />

    </div>
  )
}

export default TodoItems