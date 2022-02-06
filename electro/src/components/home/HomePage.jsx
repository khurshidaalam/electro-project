import React from 'react';
import "./home.css";
import TextField from '@mui/material/TextField';

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
                        <form>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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