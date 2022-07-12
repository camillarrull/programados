import React from "react"
import "./preGame.modules.css"


export const PreGame = (props) => {
    const {changeGameStatus} = props
    const changeStatus = () => {
        changeGameStatus('duringGame')
    }
    
    return (
        <div>
            <h1><span>P</span><span>R</span><span>O</span><span>G</span><span>R</span><span>A</span><span>M</span><span>A</span><span>D</span><span>O</span><span>S</span></h1>
            <h3>Con este juego vas a poder poner a prueba tus conocimientos!</h3>
            <p id="description">En 5 minutos deberas responder 30 preguntas multiplechoice acerca de diferentes temas de programacion</p>
            <button class='button' onClick={() => { changeStatus() }}>INICIAR PARTIDA</button>
           
        </div>
    )
}

