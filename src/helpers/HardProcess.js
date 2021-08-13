import React from 'react'



export  const HardProcess = (value) => {
        
        for (let index = 0; index < value; index++) {
           console.log("Proceso pesado"); 
        }

        return `Se realizaron ${value} procesos`;
        
}
   

