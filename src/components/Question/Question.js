
import React from "react";
import Icon from "../Icon";
import Footer from "../Footer";
import './style.css';

export default function Question ({question, answer, index}){
    const [respostas, setRespostas] = React.useState([])
    const [turned, setTurned] = React.useState(false)
    const [alreadyAnswered, setAlreadyAnswered] = React.useState(false)
    const [reveled, setReveled] = React.useState(false)



    function addItem(type) {
		setRespostas([...respostas, type]);
        console.log(respostas)
	}
    function respondido (){
        setReveled(!reveled);
        setTurned(!turned);
        setAlreadyAnswered(!alreadyAnswered);
    }
    
    return(
        <div className="">
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
                        <button onClick={() => {respondido(); addItem('close-circle')}}>Não lembrei</button>
                        <button onClick={() => {respondido(); addItem('help-circle')}}>Quase não lembrei</button>
                        <button onClick={() => {respondido(); addItem('checkmark-circle')}}>Zap!</button>
                    </div>

                </div>
            </div>
            
            <div className="result">
                <div className='respostas'>
                    {respostas.map((item) => (<ion-icon name={item}></ion-icon>))}
                </div>


                <div className="result hidden">
                        Ainda faltam alguns...
                        Mas não desanime!
                </div>
            </div>

            
        
        </div>

    )
}
