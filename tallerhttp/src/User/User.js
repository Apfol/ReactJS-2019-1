import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneInTalkTwoToneIcon from '@material-ui/icons/PhoneInTalkTwoTone';
import './User.css'


var User = (props) => {


    return(
      <div className='card'>
        <Card className='insideCard'>
      <CardContent>

        <Typography variant="h5" >
          {props.firstName} {props.lastName}
        </Typography>
        
       <Typography className='money' >
            <strong>{props.money}</strong>
        </Typography>
        
       
        <Typography className='phone' variant="h5" color="secondary">
        {props.phone} 
        </Typography>
        <PhoneInTalkTwoToneIcon  />
        
        
      </CardContent>
    </Card>
  </div>
    );
}

export default User;