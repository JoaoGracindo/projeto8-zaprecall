import React from "react";
import Icon from "../Icon";
import Question from "../Question/Question";
import './style.css';

const cards = [
    {
        
        question: "O que é JSX?" ,
        answer:"Uma extensão de linguagem do JavaScript"
    },

    {
        
        question:" O React é __" ,
        answer:"uma biblioteca JavaScript para construção de interfaces"
    },

    {
        
        question: "Componentes devem iniciar com __ ",
        answer:"letra maiúscula"
    },

    {
        
        question:"Podemos colocar __ dentro do JSX" ,
        answer:"expressões"
    },

    {
        
        question: "O ReactDOM nos ajuda __" ,
        answer:"interagindo com a DOM para colocar componentes React na mesma"
    },

    {
        
        question: "Usamos o npm para __ ",
        answer:"gerenciar os pacotes necessários e suas dependências"
    },

    {
        
        question: "Usamos props para __ ",
        answer:"passar diferentes informações para componentes"
    },

    {
        
        question: "Usamos estado (state) para __ ",
        answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

const deck = []


export default function Questions() {

    function gameDeck (){
        let arr = []
        for(let i = 0; i < cards.length; i++){
            arr.push(cards[i])
        }
        for(let j = arr.length -1; j > 0; j--){
            const k = Math.floor(Math.random() * (j + 1));
            const temp = arr[j];
            arr[j] = arr[k];
            arr[k] = temp
          }
        for(let i = 0; i < 4; i++){
            deck.push(arr[i])
        }
    }

    gameDeck();

    return(
        <div className="deck">
            {deck.map((item,index) => (
            <Question 
            {...item} 
            index={index}/>
            ))}
        </div>
        
    )
}