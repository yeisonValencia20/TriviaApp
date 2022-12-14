import React from 'react';
import {nanoid} from "nanoid"

//components
import { Question } from './Question';

// custom hooks
import { useQuestions } from '../hooks/useQuestions';


export function Quiz() {
    
    const { state, checkAnswers, selectQuestion, checkQuestions, resetQuestions } = useQuestions();

    const questions = state.map(question => 
        <Question 
            key={nanoid()}
            question={question.question} 
            answers={question.answers}
            selectQuestion={selectQuestion}
            checked={checkAnswers.checked}
        />
    )
        console.log(checkAnswers.correct)
    return(
        <div className='question__container'>
            <div className='background__element background__element--yellow background__element--right'></div>
            <div className='background__element background__element--blue background__element--left'></div>
            {questions}
            { checkAnswers.checked 
                ? <div className='question__reset'>
                    <p>{`You scored ${checkAnswers.correct}/${state.length} correct answers`}</p> 
                    <button className="button button--m0" onClick={ resetQuestions }>Play again</button>
                  </div>
                : <button className="button" onClick={checkQuestions}>Check answers</button>}
            
        </div>
    )
}