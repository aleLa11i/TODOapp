import React,{useState} from 'react';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const {counter1,counter2} = counter;

  

    

    return (
        <div>
            <h1>Counter1: {  counter1  }</h1>
            <h1>Counter2: {  counter2  }</h1>
            <hr/>
            <button onClick={()=>{
                setCounter({
            ...counter,
            counter1: counter1+1,})}}> +1 counter 1 </button>
            <button onClick={()=>{
                setCounter({
            ...counter,
            counter2: counter2+1,})}}> +1 counter 2 </button>
            <button onClick={()=>{
                setCounter({
            ...counter,
            counter1: counter1-1,})}}> -1 counter 1 </button>
            <button onClick={()=>{
                setCounter({
            ...counter,
            counter2: counter2-1,})}}> -1 counter 2 </button>
    
        </div>
    )
}

