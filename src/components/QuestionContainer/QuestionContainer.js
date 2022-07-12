import React from "react"
import "./questionContainer.modules.css"
import useCountDown from 'react-countdown-hook';

//para ir recorriendo el objeto de answers: un estado que empiece con un [] y q ene l futuro va a ser un array de objetos y con useState con el for in, ir recorriendo answers

const QuestionContainer = ({
    question,
    answers,
    correctAnswer,
    increaseIndex,
    resultadoRta,
    setResultadoRta }) => {
    const [respuestas, setRespuestas] = React.useState([])
    const [respuestaClickeada, setRespuestaClickeada] = React.useState(null)
    const [timeLeft, { start }] = useCountDown(30000, 1000);
    const [loaded, setLoaded] = React.useState(false)
    const handleAnswer = () => {
        if (respuestaClickeada === null) {
            return
        }
        if (respuestaClickeada === correctAnswer) {
            setResultadoRta(resultadoRta+1)
        }
        console.log('resultadoRta', resultadoRta)
        increaseIndex()
    }
    const handleClick = (arg) => {
        setRespuestaClickeada(arg)
        console.log(respuestaClickeada)
    }
    const parseAnswers = () => {
        const oldAnswers = answers //formato viejo : el objeto, q no queremos usar
        const newAnswers = [] // formato nuevo: vamos a guardar las rtas en forma de array
        
        for (let property in oldAnswers) {

            let value = oldAnswers[`${property}`] // hacemos q lo lea como string pq no sabemos cual es el valor q va a tener lo q trae
            
            let key = property

            let result = {
                key: key,
                value: value,
            }
            newAnswers.push(result)
            console.log(newAnswers)
        }
        setRespuestas(newAnswers)
    }
    React.useEffect(() => {
        parseAnswers()
        start();
        setLoaded(true)
    }, [])
    React.useEffect(() => {
        if (timeLeft === 0 && loaded === true) {
            if (respuestaClickeada === correctAnswer) {
            setResultadoRta(resultadoRta+1)
        }
            increaseIndex()
        }
    }, [timeLeft])


    return (
        <div>
             <p>{timeLeft/1000 }</p>
            <div id="questionDiv">
                <h3 id='question'>{question}</h3>
                <div id="answersDiv">
                    {
                        respuestas.length && respuestas.map((element, index) => {
                            return (
                                <button
                                    class={ respuestaClickeada === element.key ? 'respuestaSelected' : 'respuestas' }
                                    key={index}
                                    onClick={() => handleClick(element.key)}
                                >
                                    {element.value}
                                </button>
                            )
                        })
                   }
                </div>
            </div>
            <div><button class={respuestaClickeada ? 'next' : 'nextDisable'} onClick={()=>handleAnswer()}>SIGUIENTE PREGUNTA</button></div>
            
        </div>
    )
}

export default QuestionContainer