import { useEffect, useState } from 'react'; //imported usestate
import './App.css';

const Timer = () =>{                 //Arrow Function


  const [seconds,timerseconds]=useState(0);       //usestate hook [current state, update state]
  const [minutes,timerminutes]=useState(0); 
  const [hours,timerhours]=useState(0);      
  
  
var timer;

useEffect(()=>{   
  
  if (seconds>60 || minutes>60 || hours>24)//validations
  {

    timerseconds(0)
    timerminutes(0)
    timerhours(0)
    return (alert("Wrong Input!"))
    
  }  
  
  if (seconds===0 && minutes===0 && hours===0)//timeout
{
  
  return (alert("Timeout Completed!"))
  
  
}      
if (seconds<0 || minutes<0 || hours<0)
{
    timerseconds(0)
    timerminutes(0)
    timerhours(0)
    return (alert("Wrong Input!"))
}

timer=setInterval(()=>{            //call function repeatedly, actions after rendering
timerseconds(seconds-1) 

if (seconds===0 && minutes>0 && hours>0)
{
  timerseconds(59)
  timerminutes(minutes-1)
 
}

if (seconds===0 && minutes===0 && hours>=0)
{
  timerseconds(59)
  timerminutes(59)
  timerhours(hours-1)
}

if (seconds===0 && minutes>0)
{
  timerseconds(59)
  timerminutes(minutes-1)
}

 
},1000)

return () => clearInterval (timer);//call after 1000ms})

});
  

  
const reset =()=>{
   
  timerseconds(0)
  timerminutes(0)
  timerhours(0)
   
  }


const stop =()=>{
   
 clearInterval(timer); 
 
  
 }
 const play =()=>{
   
  timerseconds(seconds)
  timerminutes(minutes)
  timerhours(hours)
   
  }

  

  return (
    
    
    <div className="Timeapp">
      <h1>Timer App</h1>
      <div className="Inputs">
      <input onChange={(e) => {timerhours(e.target.value);}} placeholder='Enter Hours'/>
            <input onChange={(e) => {timerminutes(e.target.value);}} placeholder='Enter Minutes'/>
            <input onChange={(e) => {timerseconds(e.target.value);}} placeholder='Enter Seconds'/>
            </div>
           
      <h1>{hours<10 ? "0"+ hours:hours} : {minutes<10? "0"+ minutes:minutes} : {seconds<10? "0" +seconds:seconds}</h1>
    
      <div className="Button">
      <button className='reset' onClick={reset}>Reset</button>
      <button className='play' onClick={play}>Play</button>
      <button className='stop' onClick={stop}>Stop</button>
      </div>
      
    </div>
  );
  
}


export default Timer;
  