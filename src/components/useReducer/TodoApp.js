import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm'
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

import "./TodoApp.css";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer,[],init);

    const [  {description} , handleInputChange, reset ] = useForm({
        description: ""
    });
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <div>
            <h1>App de tareas</h1>
            <h2>Cantidad de tareas: {   todos.length    }</h2>
            

            <TodoForm   
            description = {description} 
            handleInputChange = {handleInputChange} 
            reset = {reset}
            dispatch = {dispatch}
            />

            <hr />

            <TodoList   
            todos = {todos} 
            dispatch = {dispatch}
            />


        </div>
    )
}
