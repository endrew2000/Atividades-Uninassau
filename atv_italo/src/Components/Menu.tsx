import { useEffect } from "react"  

export function Menu(){

    useEffect(()=>{document.title = 'Inicio'}, [])

    return(
    
        <div>
            <p> Testagem </p>
        </div>
    );
}