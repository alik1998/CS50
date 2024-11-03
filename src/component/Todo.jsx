import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import "../App.css";
import { FaEdit } from "react-icons/fa";

function Todo() {
  return (
    <div style={{display:'flex',flexDirection:'row', 
    alignItems:'center', justifyContent:'space-between', border:'1px solid lightgray',padding:'10px'}}>
      <div>ben todo</div>
      <div>
        <IoIosRemoveCircle className="todo-icons" />
        <FaEdit className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
