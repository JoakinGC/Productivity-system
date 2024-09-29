
import './App.css';
import logoImg from './img/principal.png';
import Buton from './componentes/button';
import Pantalla from './componentes/Input.js';
import BotonClear from './componentes/clearButton.js';
import { useState } from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input,setInput]=useState("");
  const addInput = date => {
    setInput(input+date)
  };
  const getResult = () =>{
    if(input){ //Si la cadena esta vacia es falsa y si no es verdadra
    setInput(evaluate(input));
    }else{
      alert("Ingrese un valor");
    }
  };
  
  


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logoImg}
          className='logo-img'
          alt='Logo Img'
        />
      </div>
      <div 
        className="contenedor-calculadora"
      >
        <Pantalla input={input}/>
        
        <div className="fila">
          <Buton manejarClicks={addInput}>1</Buton>
          <Buton manejarClicks={addInput}>2</Buton>
          <Buton manejarClicks={addInput}>3</Buton>
          <Buton manejarClicks={addInput}>+</Buton>
        </div>
        <div className="fila">
          <Buton manejarClicks={addInput}>4</Buton>
          <Buton manejarClicks={addInput}>5</Buton>
          <Buton manejarClicks={addInput}>6</Buton>
          <Buton manejarClicks={addInput}>-</Buton>
        </div>
        <div className="fila">
          <Buton manejarClicks={addInput}>7</Buton> 
          <Buton manejarClicks={addInput}>8</Buton>
          <Buton manejarClicks={addInput}>9</Buton>
          <Buton manejarClicks={addInput}>*</Buton>
        </div>
        <div className="fila">
          <Buton manejarClicks={getResult}>=</Buton>
          <Buton manejarClicks={addInput}>0</Buton>
          <Buton manejarClicks={addInput}>.</Buton>
          <Buton manejarClicks={addInput}>/</Buton>
        </div>        
        <div className="fila">
          <BotonClear clearInput={(getResult) => setInput("")}
          >
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
