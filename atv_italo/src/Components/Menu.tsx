import { useEffect } from "react"  

export function Menu(){

    useEffect(()=>{document.title = 'Inicio'}, [])

    return(
    
        <div>
            <p> 87 É DO SPORT </p>
        </div>
    );
}