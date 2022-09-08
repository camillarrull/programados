import React from "react"
import "./result.modules.css"

const Result = ({question, correctAnswer, clickedAnswer }) => {
    return(
        <div id="questionDivFinal">
            <h1 id="questionFinal">{question}</h1>
            <h3 id="correctAnswerFinal">Respuesta correcta: {correctAnswer}</h3>
            <h3 id="clickedAnswerFinal">Respuesta seleccionada: {clickedAnswer}</h3>
            
        </div>
    )
}

export default Result