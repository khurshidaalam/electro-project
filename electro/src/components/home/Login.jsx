import React, { useState } from 'react';
import "./home.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import {Navigate} from "react-router-dom";
import Footer from "../layout/Footer";


const HomePage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();

const navigate = useNavigate();

const  loginUser = (e)=>{
    e.preventDefault();
        (username === "setu" && password === `12345`) ? navigate("/home"): alert("username and password is not correct")
       
}
   

    return (
        <>
        <div className='loginpage'>
            <div className='home-login-div'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                        <div className='homepage-img-div'>
                            <img src=''/>
                        </div>
                        </div>
                        <div className='col-md-6 col-12'>
                        <div className='form-div '>
                        <form className='login-form'>
                        <TextField className='login-data-input' id="outlined-basic" label="username" variant="outlined" value={username} onChange={(uname)=> setUsername(uname.target.value)} />

                        <TextField style={{borderColor:`#c9312c`}}  className='login-data-input' id="outlined-basic" label="password" variant="outlined" onChange={(pword)=> setPassword(pword.target.value)} value={password}/>
                        <div className='login-btn'>
                            <Button style={{backgroundColor:`#c9312c`}} variant="contained" onClick={loginUser}>login</Button>
                        </div>
                        <div className='to-register-div mt-3'>
                            <p>if you don't have account, <a to="/">Register now</a> </p>
                        </div>
                        </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
                
            </div>

            <Footer />
            </div>
        </>
    )
}
export default HomePage;