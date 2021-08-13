import React,{useState,useEffect} from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [state, setState] = useState({
        name: "",
        email: ""
    })

    const {name, email} = state;

    useEffect(() => {
        // console.log("Inicio del programa");
    },[])


    useEffect(() => {
        // console.log("state cambio");
    },[state])


    useEffect(() => {
        // console.log("email cambio");
    },[email])



    const handleInputChange = ({target})=>{
        // console.log(target.name,target.value)
        setState({
            ...state,
            [target.name]: target.value,
        })
    }
    return (
        <div>
            <h1>useEffect</h1>
            <hr/>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese nombre"
                    name="name"
                    autoComplete="off"
                    onChange={  handleInputChange  }
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese nombre"
                    name="email"
                    autoComplete="off"
                    
                    onChange={  handleInputChange  }
                />
            </div>

            
            { (name==="Aparece")&& <Message /> }
            

        </div>
    )
}
