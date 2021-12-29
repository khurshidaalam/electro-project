import React from "react";
import "../../index.css";
import { Container } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <>
            <div className="main-nav-div bg-dark text-white fixed">
                <div class="container">
                    <div className="main-nav d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <h1 className="capitalize">Electro</h1>
                        </div>
                        <ul className="d-flex align-items-center justify-content-center list-style-none">
                            <li>
                                <input type="search" placeholder="select location" required />
                                <button>search</button>
                            </li>
                            <li><CircleNotificationsIcon/></li>
                            <li><AccountCircleIcon/></li>
                        </ul>
                    </div>
                </div>
                    
            </div>
        </>
    )

}

export default Header;