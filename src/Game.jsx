import Button from './components/Button.jsx';
import { Link } from "react-router-dom";
import { useState } from 'react';
import json from './assets/minerals.json';

export function Game(tryb) {
    const [mineral, setMineral] = useState(getRandomMineral());
    const [answers, setAnswers] = useState(getRandomAnswers(mineral));
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [qNo, setqNo] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === mineral.name) {
            setqNo(qNo + 1)
            setScore(score + 1)
            setIsCorrectAnswer(true);
            setTimeout(() => {
                setMineral(getRandomMineral());
                setAnswers(getRandomAnswers(mineral));
                setIsCorrectAnswer(null);
            }, 1000);
        } else {
            setqNo(qNo + 1)
            setIsCorrectAnswer(false);
            setTimeout(() => {
                setMineral(getRandomMineral());
                setAnswers(getRandomAnswers(mineral));
                setIsCorrectAnswer(null);
            }, 1000);
        }
      };

    return (
        <div id="main__game">
            <div id="media"><img src={mineral.image} alt="Brak zdjecia"/></div>
            <div id="input">
                {answers.map((answer, index) => (
                <Button
                    key={index}
                    _type={`button_answer ${answer === true ? 'correct' : isCorrectAnswer === false ? 'incorrect' : ''}`}
                    _onClick={() => handleAnswerClick(answer)}
                    _text={answer}
                />
                ))}
            </div> 
            wynik: {Math.round(score/qNo * 100)}% <br />
            pytanie: {qNo}
        </div>
    );
}



function getRandomMineral(){
    return json.minerals[Math.floor(Math.random() * json.minerals.length)]
}

function getRandomAnswers(correctMineral, type){
    let answers = [correctMineral.name];
    while (answers.length < 4){
        let newAnswer = json.minerals[Math.floor(Math.random() * json.minerals.length)]
        if (answers.includes(newAnswer.name)) continue
        else answers.push(newAnswer.name)
    }
    return answers
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}