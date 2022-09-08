import React from "react"
import "./preGame.modules.css"


export const PreGame = ({
    resultadoRta,
    setResultadoRta,
    puntajeMaximo,
    setPuntajeMaximo,
    changeGameStatus,
    changeCategory,
    initialData}) => {
    // const {changeGameStatus} = props
    const changeStatus = () => {
        changeGameStatus('duringGame')
    }

    // const [puntajes, setPuntajes] = React.useState([])

    return (
    <div>
            <div class="container">
                <h1 className="scale-up-ver-center">PROGRAMADOS</h1>
            <div className="description">
                <div id="descriptionText">
                <h3 id="description1">Con este juego vas a poder poner a prueba tus conocimientos!</h3>
                <h3 id="text1">En 5 minutos deberas responder 30 preguntas multiplechoice acerca de diferentes temas de programacion</h3>
                </div>
                <div id="score">
                    <p id="text2">TU PUNTAJE MAXIMO ES DE</p>
                    <p id="puntaje">{puntajeMaximo}</p>
                </div>
           
            </div>
            <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">
                        ELEGÍ TU JUEGO :
                        </p>
    
                        <ul class="content__container__list">
                            <li class="content__container__list__item" onClick={() => { changeCategory('html') }}>HTML</li>
                            <li class="content__container__list__item" onClick={() => { changeCategory('css') }}>CSS</li>
                            <li class="content__container__list__item" onClick={() => { changeCategory('javascript') }}>JAVASCRIPT</li>
                        </ul>
                    </div>
            </div>
            <div>
                <button class='button1' onClick={() => {
                        initialData()
                        changeStatus()
                    }}>INICIAR PARTIDA
                </button>
            </div>
            </div>
            </div>
    )
}

