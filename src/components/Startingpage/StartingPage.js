import { useState } from "react"
import './style.css';


export default function StartingPage({clicado, iniciaRecall}){
    
    return(
        <div className="starting-page">
            <div>
                <div>
                        <img src='./images/logo.png'/>
                </div>
                <div>
                        ZapRecall
                </div>
                <div>
                    <button onClick={() => iniciaRecall(clicado)}>
                        Iniciar Recall!
                    </button>
                </div>

            </div>
        </div>
    )
}