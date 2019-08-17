import React, { Component } from 'react'
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, Tab, Grid, Tabs, Cell, IconButton, Icon, List, ListItem, ListItemAction, ListItemContent} from 'react-mdl'

class Skills extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://getwallpapers.com/wallpaper/full/e/8/8/904319-top-cool-awesome-backgrounds-1920x1200-laptop.jpg) center / cover'}} >FICI</CardTitle>
                <CardText>
                Web developer of: https://fici.com.co/ ,an entrepreneurship that focuses on providing in home physiotherapy sessions to high performance athletes.
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Website</Button>
                  
                </CardActions>
                
              </Card>

              <br></br>


              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://getwallpapers.com/wallpaper/full/e/8/8/904319-top-cool-awesome-backgrounds-1920x1200-laptop.jpg) center / cover'}} >My Pineal</CardTitle>
                <CardText>
                    Co-developer of a new social media platform that focuses on building a global community for like minded people around the world
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Website</Button>
                </CardActions>
                
              </Card>

              <br></br>
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://getwallpapers.com/wallpaper/full/e/8/8/904319-top-cool-awesome-backgrounds-1920x1200-laptop.jpg) center / cover'}} >Pequeños cientificos</CardTitle>
                <CardText>
                  School information system that manages everything related to finances, students, class schedules, transport and more. 
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Website</Button>
                </CardActions>
               
              </Card>
            </div>
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div>
                <List style={{width: '500px'}}>
    <ListItem>
    <ListItemContent avatar="logo">Cloud Computing</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      
    </ListItemAction>
  </ListItem>

  <ListItem>
    <ListItemContent avatar="logo">IT Infrastructure</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>

  <ListItem>
    <ListItemContent avatar="logo">Routing and networking</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>


  <ListItem>
    <ListItemContent avatar="logo">Python</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="logo">Javascript</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="logo">Swift</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      
    </ListItemAction>
  </ListItem>
  <ListItem>
    <ListItemContent avatar="logo">Java</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      <a href="#"><Icon name="star" /></a>
      
    </ListItemAction>
  </ListItem>
</List>


            </div>
          )
        } 
      }

    render(){

        return(
            <div>
         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Skills</Tab>
          
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
            </div>

        )
    }
}
export default Skills;