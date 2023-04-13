import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import QuestionList from "./QuestionList";
import SubjectList from './SubjectList';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { useState } from 'react';

function App() {
  /*const [loggedin, setLoggedin] = useState(false);*/

  return (
    
    <Router>
      
      <Routes>
        
        <Route exact path="/" element={<Login/>} />

          
        <Route path='/subjects/' element={<SubjectList/>}/>
        <Route path='/subjects/:subjectId' element={<QuestionList/>}/>
      </Routes>
    </Router>

   
  );
}

export default App;
