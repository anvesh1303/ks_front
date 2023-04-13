import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubjectList from './SubjectList'
import axios from "axios";
import Navbar from "./layout/Navbar";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState("");

    function handleLogin(){
        axios.post("http://localhost:8080/api/login", {username, password})
        .then(response => {
            //console.log(response.data);
            axios 
                .get("http://localhost:8080/api/subjects")
                .then((response) => {
                    setSubjects(response.data);
                    setLoggedIn(true);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        })
        .catch((error) =>{
            console.log(error.response.data);
        })
    }

    function handleSignup(){
        axios.post("http://localhost:8080/api/signup", {username, password})
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error.response.data);
          });
    }


    return(
        <div className="container-fluid" style={{backgroundColor:'#e6f2ff', minHeight:'100vh'}}>
            {loggedIn? (
                <div>
                <Navbar/>
                <SubjectList subjects={subjects}/>
                </div>
                )
                 : (

                
            <>
            <h1>Login to UMKC Knowledge share</h1>
            <form>
            <div className="col-sm-10">
            <label htmlFor="uname">Username: </label>
            <input className="form-control" type="text" id="uname" value={username} name="username" onChange={(e)=>setUsername(e.target.value)}/>
            </div>

            <div className="col-sm-10">
            <label htmlFor="pw">Password: </label>
            <input className="form-control" type="password" id="pw" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/><br/>
            </div>

            <button className="btn btn-primary" type="button" onClick={handleLogin}>Login</button>
            <button className="btn btn-secondary" type="button" onClick={handleSignup}>Signup</button>

            
            </form>
            </>)}
        </div>
    )
}
export default Login;