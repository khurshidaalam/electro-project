import React from "react";
import "../../index.css";
import "./layout.css";
import { Container } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from "react-router-dom";


const Header = () => {

    const searchonclick = () => {
        const sinput = document.querySelector(".search-input");
        const callsearch = document.querySelector(".search-upper-text");

        sinput.classList.add("showinput");
        callsearch.classList.add("op-zero");
    }

    return (
        <>
            <div className="main-nav-div text-white fixed zindex-12">
                <div class="container">
                    <div className="main-nav d-flex justify-content-between align-items-center" >
                        <div className="logo">
                        <Link to="/home">                            <h1 className="capitalize">Electro</h1>
</Link>
                        </div>
                        <div className="search-box">
                            <div className="search-btn">
                                <div className="search-input">
                                    <div className="searchinput-divs">
                                        <input type="search" placeholder="select location" required />
                                        <button className="searchbtn">search</button>
                                    </div>

                                    <div className="shipping-add searchinput-divs">
                                        <input type="search" placeholder="select shipping location" required />
                                        <button className="searchbtn">search</button>
                                    </div>

                                </div>
                                <p className="search-upper-text" onClick={searchonclick}>search location</p>
                            </div>
                        </div>
                        <ul className="top-nav-right-icons ">
                            <li><CircleNotificationsIcon className="notification-icon top-nav-icons" /></li>
                            <li><Link to="/Cprofile"><AccountCircleIcon className="user-icon top-nav-icons" /></Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Header;