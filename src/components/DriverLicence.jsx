import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  console.log(props);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* {typeof props.data?.email == 'undefined' &&
          <h2>
            No current driver licences
          </h2>
        } */}
        <Typography></Typography>
        <Typography>Current Driver Licence</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.data?.userId}
        </Typography>
        <Typography variant="h5" component="div">
          <Typography>Name: {props.data?.name}</Typography>
          <Typography>Address: {props.data?.address}</Typography>
          <Typography>License Number: {props.data?.licensenumber}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}