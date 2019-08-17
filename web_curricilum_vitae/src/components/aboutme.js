import React, { Component } from 'react'
import  {Grid, Cell} from 'react-mdl';

class AboutMe extends Component{
    render(){
        return(
            <div>
                <h1> About Me!</h1>
                <Grid className="grid-1">
                    <Cell col={4}>"Follow the Crazy Science. Passion, Determination,Creativity"</Cell>
                    <Cell col={4}>"Hacking life, innovating and architecting the future through technology, ideas and passion."</Cell>
                    <Cell col={4}>"Hacking life, innovating and architecting the future through technology, ideas and passion."</Cell>
                </Grid>
                <br></br>
                <br></br>
                <br></br>



                <Grid className="grid-2">
                    <Cell col={4}> <strong>"I'm an aries, INTP, enneagram type 8 / 5. And although I can't be contained by any boxes, that will give you enough insight as to what I'm like as a person.</strong> </Cell>
                    <Cell col={4}> <strong>"I'm a 22 year old female entrepreneur, advocate, soon-to-be influencer, and a science aficionado with a knack for tech "</strong></Cell>
                    <Cell col={4}><strong>"I love traveling and exploring the world around us. I consider myself an avid learner of life and a sucker for adventure" </strong></Cell>
                </Grid>


            </div>
        )
    }
}
export default AboutMe;