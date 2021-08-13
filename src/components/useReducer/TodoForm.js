import React from 'react'
import { TodoAction } from './TodoAction';

export const TodoForm = ({description, handleInputChange, reset, dispatch}) => {
    return (
        <div>
                <hr />
                <h4> Agregar tarea </h4>

                <form className="form-label">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Por ejemplo: Aprender algo, cocinar, realizar un mandado.."
                        value={ description }
                        onChange={   handleInputChange  }

                    ></input>

                    <button  
                    type="submit"
                    className="btn btn-success"
                    onClick={  e => {
                        e.preventDefault();
                        dispatch(   TodoAction("add",description));
                        reset();
                    }}
                    > Agregar </button>

                </form>
        </div>
    )
}
