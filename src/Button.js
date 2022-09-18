import Timer from './Timerapp.js';

const reset =(Props)=>{
   
    Props.timerseconds(0)
    Props.timerminutes(0)
    Props.timerhours(0)
     
    }
  const stop =()=>{
   //clearInterval(timer); 
   }
  
   export {reset, stop};