import React, { useState } from 'react';

import { HomePage } from './components/HomePage';
import { Quiz } from './components/Quiz';

export function App() {
    
    const [quiz, setQuiz] = useState({
        HomePage: true,
        checkQuiz: false
    });

    return(
        <>
            {
                quiz.HomePage
                ? <HomePage setQuiz={setQuiz} />
                : <Quiz />        
            }
        </>
    )
}