import React from "react"
import Icon from "./Icon"

export default function Question ({question, answer, key}){
    const [turned, setTurned] = React.useState(false)
    return(
        <div>
            <div className={turned ? 'hidden' : 'front'}>
                <div>
                    Pergunta {key + 1}
                </div>
                <div onClick={() => setTurned(true)}>
                    <Icon icon="play-outline"/>
                </div>
            </div>
            <div className={turned ? 'question' : 'hidden'}>
                <div>
                    {question}
                </div>
                <div>
                    <Icon icon="reload-outline" />
                </div>

            </div>
        </div>
    )
}