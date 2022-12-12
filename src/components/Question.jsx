import React, { useEffect, useState } from 'react';

export function Question({ question, answers, selectQuestion }) {

    return(
        <div className="question">
            <p className="question__text">
                {question}
            </p>
            {answers.map(answer => <div key={answer.id} id={answer.id} onClick={() => selectQuestion(answer.id)} className={`question__answer ${answer.selected && 'question__answer--selected'}`}>{answer.text}</div>)}
        </div>
    )
}