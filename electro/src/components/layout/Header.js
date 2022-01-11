import React from "react";
import "../../index.css";
import "./layout.css";
import { Container } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Header = () => {

    const searchonclick = () => {
        const sinput = document.querySelector(".search-input");
        const callsearch = document.querySelector(".search-upper-text");
    
        sinput.classList.add("showinput");
        callsearch.classList.add("op-zero");
    }

    return (
        <>
            <div className="main-nav-div bg-dark text-white fixed">
                <div class="container">
                    <div className="main-nav d-flex justify-content-between align-items-center" >
                        <div className="logo">
                            <h1 className="capitalize">Electro</h1>
                        </div>
                        <div className="search-box">
                            <div className="search-btn">
                                <div className="search-input">
                                    <input type="search" placeholder="select location" required />
                                    <button className="searchbtn">search</button>
                                </div>
                                <p className="search-upper-text" onClick={searchonclick}>search location</p>
                            </div>
                        </div>
                        <ul className="d-flex align-items-center justify-content-evenly list-style-none">
                            <li><CircleNotificationsIcon /></li>
                            <li><AccountCircleIcon /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Header;