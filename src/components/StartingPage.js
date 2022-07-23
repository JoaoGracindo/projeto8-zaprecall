import { useState } from "react"

export default function StartingPage({clicado, iniciaRecall}){
    
    return(
        <div>
            <div>
                <div>
                    <img src='./images/logo.png'/>
                </div>
                <div>
                    ZapRecall
                </div>
            </div>
            <button onClick={() => iniciaRecall(clicado)}>
                Iniciar Recall!
            </button>
        </div>
    )
}