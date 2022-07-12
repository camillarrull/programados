import React from "react"
import "./duringGame.modules.css"
import QuestionContainer from "../../components/QuestionContainer/QuestionContainer"

export const DuringGame = ({ randomQuestions, resultadoRta, setResultadoRta, changeGameStatus }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const increaseIndex = () => {
        if (currentQuestionIndex === randomQuestions.length - 1) {
            changeGameStatus('postGame')
            return
        }
        setCurrentQuestionIndex(currentQuestionIndex+1)
    }
    return (
        <div id="contenedorPreguntas">
            {
                randomQuestions.map((element, index) => {
                    return (
                        (currentQuestionIndex === index) &&
                        <QuestionContainer
                            question={element.question}
                            answers={element.answers}
                            correctAnswer={element.correctAnswer}
                            increaseIndex={increaseIndex}
                            resultadoRta={resultadoRta}
                            setResultadoRta={setResultadoRta}
                        />
                   ) 
                })
            }
        </div>
    )
}