import React from 'react';
import {nanoid} from "nanoid"

//components
import { Question } from './Question';

// custom hooks
import { useQuestions } from '../hooks/useQuestions';

export function Quiz() {
    console.log('render')
    const { state, selectQuestion, fetchQuestion } = useQuestions();

    const questions = state.map(question => 
        <Question 
            key={nanoid()}
            question={question.question} 
            answers={question.answers}
            selectQuestion={selectQuestion}
        />
    )

    return(
        <div className='question__container'>
            <div className='background__element background__element--yellow background__element--right'>

            </div>
            <div className='background__element background__element--blue background__element--left'>

            </div>
            {questions}
            <button onClick={fetchQuestion}>Reset questions</button>
        </div>
    )
}