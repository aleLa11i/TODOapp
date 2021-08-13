import React,{useState} from 'react';
import { useForm } from '../../Hooks/useForm';

export const FormWithCustomHook = () => {

    const {value, handleInputChange} = useForm({
        name: "",
        email: "",
        pass: ""
    })

    const [sumbit, setSumbit] = useState("");

    const handleInputSubmit = (e)=> {

        e.preventDefault();
        console.log("Formulario guardado!");
        setSumbit("Formulario guardado!")

    }
  
    return (
        <>
        <form  onSubmit={ handleInputSubmit }>
            <h1>useEffect</h1>
            <hr/>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese nombre"
                    name="name"
                    autoComplete="off"
                    onChange={  handleInputChange, ()=>{setSumbit("")}  }
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese email"
                    name="email"
                    autoComplete="off"
                    onChange={  handleInputChange, ()=>{setSumbit("")}  }
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="pass"
                    autoComplete="off"  
                    onChange={  handleInputChange, ()=>{setSumbit("")}  }
                />
            </div>
            <h1>{  sumbit  }</h1>

            <button onClick={handleInputSubmit}> Guardar </button>
        </form>
       
        </>
    )
}
