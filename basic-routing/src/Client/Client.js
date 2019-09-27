import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


var Client = (props) => {


    return(
      <div className='card'>
        <Card className='insideCard'>
      <CardContent>

        <Typography variant="h5" >
          {props.firstName} {props.lastName}
        </Typography>
        
       <Typography className='email' >
            <strong>{props.email}</strong>
        </Typography>
        
       
        <Typography className='city' variant="h3" color="secondary">
        {props.city} 
        </Typography>
        
        
      </CardContent>
    </Card>
  </div>
    );
}

export default Client;