import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="http://fiyazhasan.me/content/images/2017/06/default-avatar-png.png" alt="avatar" className="my-avatar"></img>
                    <div className="my-text">
                        <h2 style={{alignContent:'center'}}>Visionary tech entrepreneur</h2>
                        <hr></hr>
                        <p> Disruptive engineer</p>
                        <p>
                         Envisioning new worlds | Starting projects | Networking | Traveling 
                        </p>

                    </div>
                    </Cell>


                </Grid>


            </div>
        )
    }
}
export default LandingPage;