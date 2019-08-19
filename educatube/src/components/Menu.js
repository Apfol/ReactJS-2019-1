import React,{Component} from 'react';
import './Menu.css'

class Menu extends Component{
  state = {
    show: true
  }
  showMenu = () => {
    this.setState({show: !this.state.show})
  }
  render(){
    if(this.state.show){
      return <div className="open" onClick={this.showMenu}><span>&#9776;</span></div>
    }else{
      return <div className="overlay">
      <div className="close" onClick={this.showMenu}><span>&times;</span></div>
      <div className="overlay-content">
      {this.props.tasks.map(e => 
        <h1 href={e.link} key={e.id}>{e.title}</h1>
        )
      }
      </div>    
      </div>
    }
  }
}

export default Menu;
