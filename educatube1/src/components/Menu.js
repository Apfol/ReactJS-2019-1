import React,{Component} from 'react';
import './Menu.css';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
class Menu extends Component{
 
  state = {
    show: true,
  }
  showMenu = () => {
    this.setState({show: !this.state.show})
  }
 
  /*render(){
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
  }*/
  render()
  {
    return(
      
      <div style={{ height: '500px', width: '500px' }}>
      <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 4.8612976, lng: -74.0599286}}
        >
          <Marker position={{ lat: 4.8612976, lng: -74.0599286}} />
        </Map>
    </div>
    );
  }

}
  


const mapStyles = {
  width: '500px',
  height: '500px',
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-gBVrIlfJ_VJONzifMSMdaiZexs427r4'
})(Menu);
