import { useEffect, useState } from 'react'; //imported usestate
import './App.css';
import App from './App.js';

const Timer = (Props) =>{                 //Arrow Function

  const [seconds,timerseconds]=useState(Props.sec);       //usestate hook [current state, update state]
  const [minutes,timerminutes]=useState(Props.min); 
  const [hours,timerhours]=useState(Props.hrs);      
  console.log(seconds)

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
const reset =(Props)=>{
   
  Props.timerseconds(0)
  Props.timerminutes(0)
  Props.timerhours(0)
   
  }
const stop =()=>{
 //clearInterval(timer); 
 }

}

export default Timer;
  