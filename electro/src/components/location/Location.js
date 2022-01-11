import React from 'react';
import "./location.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = () => {
    return (
        <div>
            <div className='location-select mb-300'>
                <img src="./images/ssdmap.png" alt="dhaka" />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d116807.00211174176!2d90.46793241587793!3d23.809789523509988!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1641294848741!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe> */}

                <div className='active-ppl'>


                    <div className='active-icon'>
                        <div className='pointer-icon'>
                            <div className='active-ppl-info-div'>
                                <div className='personal-info d-flex'>
                                    <div className='person-img mr-2'>
                                        <img src="/images/Portrait_3.jpg" alt="hgj" />
                                    </div>
                                    <div className='person-details'>
                                        <ul >
                                            <li>N: mr. john</li>
                                            <li>P: 0178965442153</li>
                                            <li>E: jhgkj@gmail.com</li>
                                            <li>Id: 2314654</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className='persons-status text-left mt-2'>
                                    <ul>
                                        <li>status: available</li>
                                        <li>available timing: 10 AM - 1 PM</li>
                                        <li>available to ship: banani </li>
                                    </ul>
                                </div>
                            </div>
                            <LocationOnIcon className="active-pointer" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;
