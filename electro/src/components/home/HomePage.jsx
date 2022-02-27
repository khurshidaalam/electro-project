import React from 'react';
import "./home.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const HomePage = () => {

    

    return (
        <>
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
                        <TextField className='login-data-input' id="outlined-basic" label="username" variant="outlined" onChange={HandleChange()}/>
                        <TextField className='login-data-input' id="outlined-basic" label="password" variant="outlined" onChange={HandleChange()}/>
                        <div className='login-btn'>
                            <Button variant="contained" >login</Button>
                        </div>
                        <div className='to-register-div mt-3'>
                            <p>if you don't have account, <Link to="/">Register now</Link> </p>
                        </div>
                        </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;