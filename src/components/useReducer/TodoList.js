import React from 'react'
import { TodoAction } from './TodoAction'

export const TodoList = ({  todos , dispatch }) => {
    return (
        <ul className="list-group">
        {
               todos.map( ({id,desc,done},i) => {
                  return <>
                  <li 
                    key={ id } 
                    onClick={  ()=> dispatch(   TodoAction("toggle",id))  }     
                    className={`list-group-item list-group-item-info Todo ${ done&&'complete'}` }
                  >  
                        {`${i+1}.`} { desc }    

                        <button     
                            key={ `button ${id}`  }    
                            className="btn btn-danger boton-borrar"     
                            onClick={ () => dispatch(   TodoAction("delete",id))  }
                        >   
                                Borrar  
                        </button>

                  </li>
                  </>
               })
        }
        </ul>
    )
}
