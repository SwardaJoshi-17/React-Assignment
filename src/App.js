import { useEffect, useState } from 'react'; //imported usestate

const Timer = () =>{                 //Arrow Function

  const [seconds,timerseconds]=useState(0);       //usestate hook [current state, update state]
  const [minutes,timerminutes]=useState(0); 
  const [hours,timerhours]=useState(0);       //usestate hook [current state, update state]


var timer;

useEffect(()=>{                   //call function repeatedly, actions after rendering
timer=setInterval(()=>{
  timerseconds(seconds+1) 
  if (seconds===59)
  {
    timerminutes(timerminutes+1)
    timerseconds(0);
    
  } 
  if (minutes===59)
  {
    timerhours(timerhours+1)
    timerminutes(0);
    timerseconds(0);

  }     
       //seconds increment
},1000)

return () => clearInterval (timer);//call after 1000ms})

});
  
  return (
    <div className="Timeapp">
      <h1>Timer App</h1>
      <input type="number"></input>
       <h1 >Hours: Minutes : Seconds </h1>
       <h1 >{hours} : {minutes}: {seconds}</h1>
      
    </div>
  );
  
}

export default Timer;
  