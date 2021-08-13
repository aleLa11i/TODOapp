
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import {useMemo} from 'react'
import { HardProcess } from '../../helpers/HardProcess';

export const MultipleStateHard = () => {
    const {counter,increment,decrement,reset} = useCounter(5000,1);    

    const {data,loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const memoHardProcess = useMemo(() => HardProcess(counter), [counter])





    // const {author,quote} = !!data && data[0];

    
    return (
        <div>
            <h1>Breaking Bad</h1>

            <p>{  memoHardProcess  }</p>
            <hr/>
            <>
                { loading?
                        <div>
                            Loading...
                        </div>
                    :
                    <>
                    <blockquote>
                        {/* <p> {quote} </p> */}
                        {/* <footer> {author} </footer> */}
                    </blockquote>


                    {   (counter>1)&&<button onClick={ decrement } >Anterior</button>       }
                    
                    <button onClick={ reset }>Volver al primero</button>
                    
                    {   (counter<30)&&<button onClick={ increment }>Siguiente</button>    }

                    <button onClick={   () => {}    }>  Boton que no hace nada  </button>
                    
                    
                    </>
                }
            </>
        </div>
    )
}
