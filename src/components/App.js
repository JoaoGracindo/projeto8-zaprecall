import StartingPage from "./StartingPage"
import Questions from "./Questions"
import React from "react"


export default function App(){
    const [clicado, setClicado] = React.useState(true);
    function iniciaRecall(clicado){
        setClicado(!clicado)
    }

    return(
        <>
        {clicado ? <StartingPage clicado={clicado} iniciaRecall={iniciaRecall} /> : <Questions />}
        </>
    )
} 