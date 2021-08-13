import {useState} from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'


export const UseMultipleState = () => {

    const {state,increment,decrement,reset} = useCounter(1,1);    

    const {data,loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr/>
            <>
                { loading?
                        <div>
                            Loading...
                        </div>
                    :
                    <>
                    <blockquote>
                        <p> {quote} </p>
                        <footer> {author} </footer>
                    </blockquote>


                    {   (state>1)&&<button onClick={ decrement } >Anterior</button>       }
                    
                    <button onClick={ reset }>Volver al primero</button>
                    
                    {   (state<30)&&<button onClick={ increment }>Siguiente</button>    }
                    
                    
                    </>
                }
            </>
        </div>
    )


}