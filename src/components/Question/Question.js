import react from "react";
import React from "react";
import Icon from "../Icon";
import './style.css';

export default function Question ({question, answer, index}){
    const [turned, setTurned] = React.useState(false)
    const [alreadyAnswered, setAlreadyAnswered] = React.useState(false)
    const [reveled, setReveled] = React.useState(false)
    function respondido (){
        setReveled(!reveled);
        setTurned(!turned);
        setAlreadyAnswered(!alreadyAnswered);
    }
    return(
        <div>
            <div className={turned ? 'hidden' : 'front'}>
                <div>
                    Pergunta {index + 1}
                </div>
                <div onClick={() => {if(!alreadyAnswered){setTurned(!turned)}}}>
                    <Icon icon="play-outline"/>
                </div>
            </div>
            <div className={(turned  && !reveled)? 'question' : 'hidden'}>
                <div>
                    {question}
                </div>
                <div onClick={() => setReveled(!reveled)}>
                    <Icon icon="reload-outline" />
                </div>

            </div>
            <div className={reveled ? 'answer' : 'hidden'}>
                <div>
                    {answer}
                </div>
                <div>
                    <button onClick={respondido}>Não lembrei</button>
                    <button onClick={respondido}>Quase não lembrei</button>
                    <button onClick={respondido}>Zap!</button>
                </div>

            </div>
        </div>
    )
}

{/* <Card />
<Questao />
<Respuesta /> */}