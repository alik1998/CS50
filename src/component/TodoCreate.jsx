import React from 'react'
import '../App.css'
function TodoCreate(){
    return (
      <div className='todo-create'>
        <input className='todo-input' type="text" placeholder='Todo Giriniz'/>
        <button className='todo-create-button'>to do oluşturun</button>
      </div>
    )
}

export default TodoCreate;
