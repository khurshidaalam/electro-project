import React, {useState} from 'react';
import "./location.css";
import ManIcon from '@mui/icons-material/Man';
import PersonProfile from "./PersonProfile";


// const profilDiv = document.querySelector(".active-ppl-info-div");

//     const showProfile =() =>{
//         return (profilDiv.classList.contains('d-none')? profilDiv.classList.remove('d-none'): profilDiv.classList.add('d-none')
//         )
//     }
//      const closeProfile =() =>{
//         profilDiv.classList.add('d-none');
//     }

const Location = () => {
    const [profile, setProfile] = useState(false);
    

    return (
        <div>
            <div className='location-select mb-300'>
                <img src="./images/ssdmap.png" alt="dhaka" />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d116807.00211174176!2d90.46793241587793!3d23.809789523509988!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1641294848741!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe> */}

                <div className='active-ppl'>
                    <div className='active-icon'>
                        <div className='pointer-icon'>
                            { profile === true && <PersonProfile/> }
                            <ManIcon className="active-pointer" onClick={setProfile(!profile)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;
