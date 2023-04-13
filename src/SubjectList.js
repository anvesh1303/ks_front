import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SubjectList({subjects}){
    

    return(
        <div>
            <h1>Subjects</h1>
            <ul>
                {subjects.map((subject) =>(
                    <li key={subject.id}>
                        <Link to={`/subjects/${subject.id}`}>{subject.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SubjectList