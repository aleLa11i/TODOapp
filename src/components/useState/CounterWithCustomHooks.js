import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

export const CounterWithCustomHooks = () => {


    const {state,increment,decrement,reset} = useCounter(2,0);

    return (
        <div>

            <h1>Counter1: { state }</h1>
            <hr/>
            <button onClick={ decrement }>-1</button> 
            <button onClick={ reset }>Reset</button> 
            <button onClick={ increment }>+1</button> 
        
        </div>
    )
}
