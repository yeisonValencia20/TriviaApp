import { useState, useEffect } from 'react';

import axios from 'axios'
import {nanoid} from "nanoid"

export function useQuestions() {

    const [state, setState] = useState([]);


    // function to get from the response only the questions and the answers.
    const normalizedQuestion = (data) => {
        
        const questionArray = []
        data.forEach( question => {
            const answers = []

            answers.push({
                id: nanoid(),
                text: atob(question.correct_answer),
                correct: true,
                selected: false
            })

            question.incorrect_answers.forEach(answer => answers.push({ id: nanoid(), text: atob(answer), correct: false, selected: false }));

            questionArray.push({ answers, question: atob(question.question) })
        })
        setState(questionArray)
    }

    const fetchQuestion = () => {
        axios.get('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64')
        .then( resp => {
            const { results } = resp.data;
            normalizedQuestion(results)
        })
        .catch(console.log)
    }

    const selectQuestion = (id) => {
        setState(prevData => prevData.map(question => {
            let findQuestion = false;
            const updatedAnswers = question.answers.map(answer => {
                if( answer.id === id ){
                    findQuestion = true;
                    return {...answer, selected: true}
                }
                return {...answer, selected: false}
            })
            if (findQuestion) {
                findQuestion = false;
                return { question: question.question, answers: updatedAnswers }
            }
            return question;
        }))         
    }

    useEffect(() => {
        fetchQuestion()
    }, []);

    return {
        state,
        fetchQuestion,
        selectQuestion
    }
}