import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x:0,y:0
    })
    const {x,y} = coords;


    useEffect(() =>{
        
        const MouseMove = (e)=> {
            setCoords({
                x: e.x,
                y: e.y
            });
        }

        window.addEventListener("mousemove",MouseMove);

        return () => window.removeEventListener("mousemove",MouseMove);
       
    },[]);

    return (
        <div>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
