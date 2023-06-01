import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DriverLicence from './DriverLicence.jsx';
import { API } from 'aws-amplify';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    const licenseNumber = event.target.elements.licenseNumber.value;
    const address = event.target.elements.address.value;
    const name = event.target.elements.name.value;
    <label> {name} </label>

    try {
      const response = await API.post('baseApi', '/users', {
        body: {
          userId: licenseNumber,
          name: name,
          address: address
        },
      });
      console.log('API response:', response);
    } catch (error) {
      console.log('Error:', error.response?.data);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: 80 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <form onSubmit={handleFormSubmit}>
              <center>
                <label htmlFor="licenseNumber">License Number:</label>
                <input type="text" id="licenseNumber" name="licenseNumber" required />

                <div></div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <div></div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <div></div>
              </center>
              <input type="submit" value="Submit" />
            </form>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <DriverLicence data={props.data} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Placeholder: Expired Driver Licence</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

