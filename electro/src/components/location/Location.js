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
    const [view, setView] = useState(false);
    

    return (
        <>
            <div className='location-select mb-300'>
                <img src="../../images/ssdmap.png" alt="dhaka" />
                
                <div className='active-ppl'>
                    <div className='active-icon'>
                        <div className='pointer-icon'>
                            { view === true && <PersonProfile setView={setView}/> }
                            <ManIcon className="active-pointer" onClick={()=>{setView(!view)}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;
