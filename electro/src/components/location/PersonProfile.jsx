import React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import BadgeIcon from '@mui/icons-material/Badge';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PersonIcon from '@mui/icons-material/Person';

const PersonProfile = ({ setView}) => {
    return (
        <>
            <div className='active-ppl-info-div '>
                                <div className='personal-info d-flex'>
                                    <div className='person-img mr-2'>
                                        <img src="/images/Portrait_3.jpg" alt="hgj" />
                                    </div>
                                    <div className='person-details'>
                                        <ul >
                                            <li><PersonIcon className='profile-div-icons'/> mr. john</li>
                                            <li><CallRoundedIcon className='profile-div-icons'/> 0178965442153</li>
                                            <li><MarkEmailReadIcon className='profile-div-icons'/> jhgkj@gmail.com</li>
                                            <li><BadgeIcon className='profile-div-icons'/> 2314654</li>
                                        </ul>

                                    </div>
                                    <CloseRoundedIcon  className="cross-profile-icon" onClick={()=>{setView(false)}}/>
                                </div>
                                <div className='persons-status text-left mt-2'>
                                    <ul> 
                                        <li>status: available</li>
                                        <li>available timing: 10 AM - 1 PM</li>
                                        <li>available to ship: banani </li>
                                    </ul>
                                    <button class="call-now"><a href="callto:014563244789"><CallRoundedIcon className="call-now-icon"/>
                                    call now</a></button>
                                </div>
                            </div>
       </>
    )
}
export default PersonProfile;