import React from 'react';
import personimage from "../../images/Portrait_3.jpg";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import "./carrier.css";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';

const Profile = () => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className='p-main-div'>
        <div className='profile-information'>
        <div className='info-side'>
            <table className='info-list'>
              <tr>
                <th>Name</th>
                <td>: </td>
                <td>jhony smith</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>: </td>
                <td>california, USA</td>
              </tr>
              <tr>
                <th>ID</th>
                <td>: </td>
                <td>4321</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>: </td>
                <td>+8801522525</td>
              </tr>
              <tr>
                <th>joining</th>
                <td>: </td>
                <td>10/05/22</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>: </td>
                <td className='d-flex'><StarRateIcon/><StarRateIcon/> <StarRateIcon/><StarRateIcon/><StarRateIcon/></td>
              </tr>
            </table>
          </div>
          <div className='image-side'>
            <div className='image-div'>
              <img src={personimage} alt='' />
            </div>
            <div class="status">
              <span>status: </span>
              <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Off</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Typography>On</Typography>
            </Stack>
            </div>
            <div className='profile-btns'>
              <button class="call-mail-btn call">call</button>
              <button class="call-mail-btn mail">e-mail</button>
            </div>
            
            
          </div>
          
        </div>

        <div>
          <div className="data-widgat-div">
            <div className="data-widgate">
              <h3>total delivered</h3><hr></hr>
              <h4>15</h4>
            </div>
            <div className="data-widgate">
              <h3>total delivered</h3><hr></hr>
              <h4>15</h4>
            </div>
            <div className="data-widgate">
              <h3>total delivered</h3><hr></hr>
              <h4>15</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;