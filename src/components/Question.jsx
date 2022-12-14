import React from 'react';

export function Question({ question, answers, selectQuestion, checked }) {

    const styleAnswer = (answer, checked) => {

        if(answer.selected && !checked){
            return ' question__answer--selected'
        }

        if(answer.selected && !answer.correct){
            return ' question__answer--incorrect'
        }
        
        if(answer.correct && checked ){
            return ' question__answer--correct'
        }

        if(!answer.selected && checked){
            return ' question__answer--checked'
        }

        return ''
    }

    return(
        <div className="question">
            <p className="question__text">
                {question}
            </p>
            { answers.map( answer => 
                <div 
                    key={answer.id} 
                    id={answer.id} 
                    onClick={() => !checked ? selectQuestion(answer.id) : null} 
                    className={`question__answer${styleAnswer(answer, checked)}`}
                >
                    { answer.text }
                </div> )}
        </div>
    )
}