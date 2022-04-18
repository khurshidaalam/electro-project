import React, { useState, useRef, useLayoutEffect } from 'react';
import "./home.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom";
import Footer from "../layout/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const { username, password } = user;
    const onInputCahnge = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("file:///F:/electro-project/electro/db.json", user);
        navigate.push('/');
    }


    const componentRef = useRef()
    useLayoutEffect(() => {
        console.log(componentRef.current.clientHeight)
        const fheight = componentRef.current.clientHeight;
        const maincontent = document.querySelector('.main_content');
        maincontent.style.marginBottom = `${fheight}px`;
    })

    return (
        <>
            <div className='loginpage'>
                <div className='home-login-div main_content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='homepage-img-div'>
                                    <img src='' />
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-div '>
                                    <form className='login-form' onSubmit="onSubmitForm(e)">
                                        <TextField className='login-data-input'
                                            id="outlined-basic"
                                            label="username"
                                            variant="outlined"
                                            name="username"
                                            value={username}
                                            onChange="onInputCahnge(e)"

                                        />

                                        <TextField style={{ borderColor: `#c9312c` }}
                                            className='login-data-input'
                                            id="outlined-basic"
                                            label="password"
                                            variant="outlined"
                                            onChange="onInputCahnge(e)"
                                            name="password"
                                            value={password}

                                        />
                                        <div className='login-btn'>
                                            <Button style={{ backgroundColor: `#c9312c` }} variant="contained" >login</Button>
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
                <Footer componentRef={componentRef} />


            </div>
        </>
    )
}
export default Login;