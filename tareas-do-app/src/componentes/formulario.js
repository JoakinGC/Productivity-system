import React, {useState} from 'react';
import '../styles/fomrulary.css';
import { v4 as uuidv4 } from 'uuid';

export default function Formulary (props){

    const [input, setInput] = useState('');

    const changeInput = (e) =>{
        setInput(e.target.value);
    }

    const sendTask = (e) =>{
        e.preventDefault();
        const newTask = {
            id:uuidv4(),
            text:input,
            complet:false,

        };

        props.onSubmit(newTask);
    };

    return(
        <form className='task-formulary' onSubmit={sendTask}>
            <input
                className='task-input'
                type='text'
                placeholder='Escribe una tarea'
                name='text'
                onChange={changeInput} 
            />
            <button className='formulary-bottom'>
                Agregar Tarea
            </button>
        </form>
        
    );

};