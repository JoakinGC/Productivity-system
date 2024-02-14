import React from 'react';
import '../styles/task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Tarea({id,text,complet,completeTask,deleteTask}){
    return(
        <div className={(complet) ? "task-container complet":"task-container"}>
            <div 
            className='task-text'
            onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='task-container-icon'
                onClick={() => deleteTask(id) }>
                <AiOutlineCloseCircle className='task-icon'/>
            </div>
        </div>
    );
};