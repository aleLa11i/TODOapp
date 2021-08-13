import React from 'react'

export const IntroReducer = () => {

    const initialState = [{
        id:1,
        value: "Cocinar",
        state:false
    }];

    const Reducer =  (state = initialState, action) => {

        if(action?.type  ===   "agregar"){
                return [...state, action.payload]
        }

        return state;
    }

    let red = Reducer()

    const newState = {
        id:2,
        value: "Limpiar",
        state: true
    }

    const newAction = [{
        type: "agregar",
        payload: newState
    },{
        type: "agregar",
        payload: {
            id:3,
            value: "Ver TV",
            state: true
        }
    }]


    red = Reducer( red,newAction[0] );
    red = Reducer( red,newAction[1] );


    return (
        <div>
            <p>{    JSON.stringify(red)    }</p>
        </div>
    )
}
