import React from "react"
import "./container.modules.css";
import questionsData from "../../data.json";
import { PreGame } from "../../views/PreGame/PreGame";
import { PostGame } from "../../views/PostGame/PostGame";
import { DuringGame } from "../../views/DuringGame/DuringGame";

//INFORMACION QUE VAMOS A ALMACENAR ACA: 
//1) un estado que cuando inicia la partida se traiga 10 preguntas random no repetidas
//2) un estado que vaya almacenando el resultado
//3) un estado que almacene la pregunta actual
//4) una pantalla que contenga un componente que le de inicio a la partida (INICIAR PARTIDA)
//5) idem cuando finaliza
//6) un ultimo estado que almacene en que momento del juego estamos 


const Container = () => {
    const [gameStatus, setGameStatus] = React.useState('preGame')
    const [randomQuestions, setRandomQuestions] = React.useState([]);
    const [resultadoRta, setResultadoRta] = React.useState(0)
    const [historialRta, setHistorialRta] = React.useState([])
    const [puntajeMaximo, setPuntajeMaximo] = React.useState(0)
    const [gameCategory, setGameCategory] = React.useState('random')
    const initialData = () => {
        let preguntasSeleccionadasAux = [] //variable auxiliar
        let indexSeleccionados = [] 
        while (preguntasSeleccionadasAux.length < 4) {
            if (gameCategory === 'random') {
                let questionDataLength = questionsData.length
                let randomIndex = Math.floor(Math.random() * questionDataLength)
                let selectedQuestion = questionsData[randomIndex]
                if (indexSeleccionados.indexOf(randomIndex) === -1) {
                    preguntasSeleccionadasAux.push(selectedQuestion)
                    indexSeleccionados.push(randomIndex)
                }
            } else {
                let filterArray = questionsData.filter((element, index) => element.category === gameCategory )
                let filterArrayLength = filterArray.length
                let randomIndex = Math.floor(Math.random() * filterArrayLength)
                let selectedQuestion = filterArray[randomIndex]
                if (indexSeleccionados.indexOf(randomIndex) === -1) {
                    preguntasSeleccionadasAux.push(selectedQuestion)
                    indexSeleccionados.push(randomIndex)
                }
            }
            
            
        }
        setRandomQuestions(preguntasSeleccionadasAux)
    }
    const changeGameStatus = (status) => {
        setGameStatus(status)
    }
    const changeCategory = (category) => {
        setGameCategory(category)
        console.log('category')
    }
    
    // React.useEffect(() => {
    //     initialData()
    // }, [])
    return (
        <div id="container">
            {
                // (gameStatus === 'preGame') && <PreGame/>

                // Ternario : condicion ? accion (en caso de q la condicion sea positiva) : (condition false action)
                
                (gameStatus === 'preGame') ?
                    <PreGame
                        initialData={initialData}
                        changeCategory={changeCategory}
                        changeGameStatus={changeGameStatus}
                        setResultadoRta={setResultadoRta}
                        resultadoRta={resultadoRta}
                        puntajeMaximo={puntajeMaximo}
                        setPuntajeMaximo={setPuntajeMaximo}
                    />
                : (gameStatus === 'duringGame') ?
                    <DuringGame
                            randomQuestions={randomQuestions}
                            resultadoRta={resultadoRta}
                            setResultadoRta={setResultadoRta}
                            changeGameStatus={changeGameStatus}
                            historialRta={historialRta}
                            setHistorialRta={setHistorialRta}
                            
                    />
                :   <PostGame
                            resultadoRta={resultadoRta}
                            setResultadoRta={setResultadoRta}
                            puntajeMaximo={puntajeMaximo}
                            setPuntajeMaximo={setPuntajeMaximo}
                            changeGameStatus={changeGameStatus}
                            initialData={initialData}
                            historialRta={historialRta}
                            setHistorialRta={setHistorialRta}
                    />
            }
        </div>
    )
}

export default Container

//MOSTRAR EL MAXIMO DE PUNTUACION Y LO DE CATEGORIAS
//ESTILAR BIEN ESTO
