import React from "react"
import "./postGame.modules.css"

export const PostGame = ({ resultadoRta, changeGameStatus, setResultadoRta, initialData }) => {
    const changeStatus = () => {
        setResultadoRta(0)
        changeGameStatus('preGame')
        initialData()
    }
    return (
        <div>
                <p>FELICITACIONES!</p>
                <h3>OBTUVISTE {resultadoRta} RESPUESTAS CORRECTAS</h3>
                <button class='button' onClick={() =>{changeStatus()}}>VOLVER A JUGAR</button>
        </div>
    )
}
