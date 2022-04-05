import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./rcv.css";

const steps = [
        'confirmed',
        'picked',
        'on the way',
        'door step',
        'delivered'
      ];

const ReceiverOrderList = () => {
    
  return (
    <div>
        <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">order id</th>
            <th scope="col">date</th>
            <th scope="col">shop</th>
            <th scope="col">from</th>
            <th scope="col">to</th>
            <th scope="col">receiver info</th>
            <th scope="col">payment</th>
            <th scope="col">paid</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td >1</td>
            <td >1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>view</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>view</td>
          </tr>
        </tbody>
      </table>
      <div className='voew-order-details-modal'>
          <div>
              <h1>order id : #1235 </h1>
              <Box sx={{ width: '100%', color: 'black' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
          </div>
      </div>
    </div>
  )
}

export default ReceiverOrderList