import React from 'react'

export function HomePage({ setQuiz }) {
    return(
        <div className='home'>
            <div className='background__element background__element--yellow'>

            </div>
            <div className='background__element background__element--blue'>

            </div>
            <h1 className='title'>Quizzical</h1>
            <p className='paragraph'>this page is design to prove your knowledge</p>
            <button className="button" onClick={() => setQuiz(prev => !prev)}>Start quiz</button>
        </div>
    )
}