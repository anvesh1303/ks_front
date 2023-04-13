import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function QuestionList(){
    const {subjectId} = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/questions/${subjectId}`)
        .then(response => setQuestions(response.data))
        .catch(error => console.error(error));
    }, [subjectId]);
    
    return(
        <div>
            <h1>Questions</h1>
            <ul>
                {questions.map((question)=> (
                    <li key={question.id}>
                        <p><strong>Question:</strong>{question.question}</p>
                        <p><strong>Answer:</strong>{question.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default QuestionList;