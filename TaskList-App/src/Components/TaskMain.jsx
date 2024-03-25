import './TaskMain.css'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo, updateTodo } from "../Actions/actionindex"
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const TASKMAIN = ()=>{  
    const [inputData, setInputData] = useState("");
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const dispatch = useDispatch();
const nav = useNavigate();
  const handleAddTodo = () => {
    if (inputData.trim() !== "") {
      const newTask = {
        id: nanoid(),
        data: inputData,
      };
      dispatch(addTodo([newTask]));
      setInputData("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleRemoveAll = () => {
    dispatch(removeTodo());
  };

  const handleEditTodo = (id) => {
    const newData = prompt('Enter new task text:');
    if (newData !== null && newData.trim() !== '') {
      dispatch(updateTodo(id, newData));
    }
  };


  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Generate your Tasks &#x270C;</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="Create your Category &#x270D;"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i className="fa fa-plus add-btn" onClick={handleAddTodo}></i>
        </div>
     

        <div className="showItems" >
          {tasks.map((task) => (
            <div className="eachItem" key={task.id}
            >
             <Link to ={`/app/${task.id}`}><h3 >{task.data}</h3>  </Link> 
              <i
                className="far fa-trash-alt add-btn"
                onClick={() => handleDeleteTodo(task.id)}
              ></i>
              <i className="far fa-edit add-btn" onClick={() => handleEditTodo(task.id)}></i>
            </div>
          ))}
        </div>
        <div className="showItems">
          <button
            onClick={handleRemoveAll}
          >
            <span>Remove All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TASKMAIN

