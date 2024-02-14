import React, {useState} from 'react';
import Formulary from './formulario';
import '../styles/listTasks.css';
import Tarea from './task.js'

export default function ListTask(){
    const [tasks,setTasks] = useState([]);


    const addTask = (task) =>{
        console.log(task)
        if(task.text.trim()){
            task.text =task.text.trim();            
            const updatesTasks = [task,...tasks];
            setTasks(updatesTasks);
            console.log(tasks)
           
        }
    };

    const deleteTask = (id) => {
        const updatesTask = tasks.filter(task => task.id !== id);
        setTasks(updatesTask);
    };

    const completeTask = (id) =>{
        const updateTask = tasks.map(
            task =>{
                if(task.id === id){
                    task.complet = !task.complet;
                }
                return task;
            }
        );

        setTasks(updateTask);
    };

    return(
        <>
            <Formulary onSubmit={addTask}/>
            <div className='task-list-container'>
            {tasks.map(task => (
                <Tarea
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    complet={task.complet}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                />
                 ))}

            </div>
        </>
    );
}

