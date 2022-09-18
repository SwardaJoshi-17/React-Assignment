import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.js'
import './App.css';

const USA =()=>{
 
    let USATime = new Date().toLocaleTimeString("en-US", 
    {timeZone:'America/Chicago',timestyle:'full'})
    console.log(USATime)
      
      return(alert("Timer will end "+ USATime + " at in USA"))
   
   }
  
   const Aus =()=>{
   
    let AusTime = new Date().toLocaleTimeString("en-US", 
    {timeZone:'Australia/Brisbane',timestyle:'full'})
    console.log(AusTime)
  
    const [thours, tminutes, tseconds] = AusTime.split(' ');
    
      return(alert("Timer will end "+ AusTime + " at in Australia"))
   
   }
  
   const Japan =()=>{
   
    let JapanTime = new Date().toLocaleTimeString("en-US", 
    {timeZone:'Asia/Tokyo',timestyle:'full'})
    console.log(JapanTime)
      
      return(alert("Timer will end "+ JapanTime + " at in Japan"))
   
   }
  
   export {Aus, USA, Japan};