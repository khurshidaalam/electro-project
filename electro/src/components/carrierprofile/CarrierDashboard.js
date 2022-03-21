import React from 'react';
import "./carrier.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const CarrierDashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='carrier-dashboard-main'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="total orders" {...a11yProps(1)} />
          <Tab label="completed order" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Profile
      </TabPanel>
      <TabPanel value={value} index={1}>
        total orders
      </TabPanel>
      <TabPanel value={value} index={2}>
        completed order
      </TabPanel>
    </Box>
    </div>
  );
}

export default CarrierDashboard;



// return (
//   <div>
//     <div className='carrier-dashboard-main'>
//       <div className='c-dashboard-sidebar'>
//         iofnmirhugfuie
//       </div>
//       <div className='c-dashboard-main-div'>fbvjhebrmcoiyurhgofy</div>
//     </div>
//   </div>
// )