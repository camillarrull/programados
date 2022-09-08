import React from "react"
import "./postGame.modules.css"
import Result from "../../components/Result/Result"

export const PostGame = ({ resultadoRta, changeGameStatus, setResultadoRta, initialData, puntajeMaximo, setPuntajeMaximo, historialRta,setHistorialRta }) => {
    const changeStatus = () => {
        if (resultadoRta > puntajeMaximo) {
            setPuntajeMaximo(resultadoRta)
        }
        setResultadoRta(0)
        setHistorialRta([])
        changeGameStatus('preGame')
        initialData()
    }
    React.useEffect(() => {
        console.log(historialRta)
    }, [historialRta])
    return (
        <div id="containerPost">
            <h1 id="congrats">FELICITACIONES!</h1>
            <h2 id="resultado">OBTUVISTE {resultadoRta} RESPUESTAS CORRECTAS</h2>
            {
                historialRta && historialRta.map((infoRespuesta, index) => {
                    return (
                        <div key={index}>
                            {/* <h2>{infoRespuesta.question}</h2>
                            <h3>{infoRespuesta.answers[infoRespuesta.correctAnswer]}</h3>
                            {
                                infoRespuesta.correctAnswer === infoRespuesta.clickedAnswer ? null : (
                                    <p>{infoRespuesta.answers[infoRespuesta.clickedAnswer]}</p>
                                )
                            } */}
                            <Result
                                resultadoRta={resultadoRta}
                                question={infoRespuesta.question}
                                correctAnswer={infoRespuesta.answers[infoRespuesta.correctAnswer]}
                                clickedAnswer={
                                infoRespuesta.correctAnswer === infoRespuesta.clickedAnswer ? null : (
                                    <p>{infoRespuesta.answers[infoRespuesta.clickedAnswer]}</p>
                                )
                            }
                            />
                    </div>
                )
              })
            }
            <button class='button' onClick={() => { changeStatus() }}>VOLVER A JUGAR</button>
        </div>
    )
}
