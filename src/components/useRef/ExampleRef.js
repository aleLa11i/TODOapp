import React, {useState} from 'react'
import { MultipleStateHard } from '../useExamples/MultipleStateHard';
import { UseMultipleState } from '../useExamples/UseMultipleState';

export const ExampleRef = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Example useRef</h1>
            <hr />

            {   show    &&  <MultipleStateHard  />    }

            <button onClick={ () => {
                setShow(!show);
            }  }>  Mostrar  </button>
        </div>
    )
}
