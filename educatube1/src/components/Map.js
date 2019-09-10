import React,{Component} from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
class Maps extends Component{
 
  state = {
    show: true,
  }
  showMenu = () => {
    this.setState({show: !this.state.show})
  }
 
 
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
})(Maps);
