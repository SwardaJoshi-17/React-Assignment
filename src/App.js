import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.js'
import './App.css';
import Timer from './Timerapp.js';
import {Aus, Japan, USA} from './Timezone.js'
import {reset, stop} from './Button.js'
import {  useState } from 'react'; //imported usestate

const App = () =>{      
    
    const [seconds,timerseconds]=useState(" ");       //usestate hook [current state, update state]
    const [minutes,timerminutes]=useState(" "); 
    const [hours,timerhours]=useState(" ");    
   
    console.log(seconds)


return(
     <>
    <h1>Timer App</h1>
   <Timer sec={timerseconds}/>
   <Timer min={timerminutes}/>
   <Timer hrs={timerhours}/>
   
    <div className="Timeapp">
      
      <div className="Inputs">
        
            <h1>Enter Hours : <input type="number" onChange={(e) => {timerhours(e.target.value);}} placeholder='00'/></h1>
            <h1>Enter Minutes : <input type="number" onChange={(e) => {timerminutes(e.target.value);}} placeholder='00'/></h1>
            <h1>Enter Seconds : <input type="number" onChange={(e) => {timerseconds(e.target.value);}} placeholder='00'/></h1>
            </div>
            <select name="watches" id="watches">
      
      <option value="USA" onClick={USA}>USA</option>
      <option value="Australia" onClick={Aus}>Australia</option>
      <option value="Japan" onClick={Japan}>Japan</option>
           </select>
      <h1>{hours<10 ? "0"+ hours:hours} : {minutes<10? "0"+ minutes:minutes} : {seconds<10? "0" +seconds:seconds}</h1>
    
      <div className="Button">
      <button className='reset' onClick={reset}>Reset</button>
      <button className='play' onClick={Timer}>Play</button>
      <button className='stop' onClick={stop}>Stop</button>
      </div>
      
    </div>
  
    </>
);

}

export default App;