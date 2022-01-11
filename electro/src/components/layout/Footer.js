import React from 'react';
import "./layout.css";

const Footer = () => {
    return (
        <div>
            <div className="footer bg-dark text-white">
                <div className='container'>
                    <div className='footer-content'>
                        <div className='row'>
                            <div className='col-4'>
                                <ul>
                                    <li>
                                        <h3>contact us</h3>
                                    </li>
                                    <li><a href=''>0187654987</a></li>
                                    <li><a href="">01563214789</a></li>
                                    <li><a href="">mailtoelectro@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className='col-4'>
                                <ul>
                                    <li>
                                        <h3>find us</h3>
                                    </li>
                                    <li>uttara, dhaka, bangladesh</li>
                                </ul>
                                <ul>
                                    <li>
                                        <h3>career</h3>
                                    </li>
                                    <li><p>Looking for a job opportunity?</p>
                                       <a href=''>careeratelectro@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className='col-4'>
                                <ul>
                                    <li>
                                        <h3>follow us</h3>
                                    </li>
                                    <li><a href=''>fb</a></li>
                                    <li><a href=''>insta</a></li>
                                    <li><a href=''>in</a></li>
                                    <li><a href=''>tw</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='copywrite'>
                    <div className='container'>
                        <div className=' text-white text-center'>
                            <p className='mb-0 '>copywrite reserved by team free thinkers &copy; 2022 </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
