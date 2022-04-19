import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {

  return (
    <Card sx={{ minWidth: 275 }} className={"test"}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Character
        </Typography>
        <Typography variant="h5" style={{marginLeft:"20px"}} component="div">
          {props.character}
        </Typography>
        <Typography sx={{ mb: 1.5 }}  color="text.secondary">
          Sequence
        </Typography>
        <Typography variant="body2"  className={"card-content"}>
          {props.sequence}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
