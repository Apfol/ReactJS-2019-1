import React,{Component} from 'react';
import Card from "./CardsUI";
import img1 from "../Assets/Persona3.jpg";
import img2 from "../Assets/Persona3.jpg";
import img3 from "../Assets/Persona3.jpg";
class Cards extends Component
{
    state = {
        show: true,
      }
      showMenu = () => {
        this.setState({show: !this.state.show})
      }
      render()
      {
        return(
          
            <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
              <div className='col-md-4'>
                <Card imgsrc={img1} title='Juanito' />
              </div>
              <div className='col-md-4'>
                <Card imgsrc={img2} title='Pepito' />
              </div>
              <div className='col-md-4'>
                <Card imgsrc={img3} title='Pablito' />
              </div>
            </div>
          </div>
        );
      }
}
export default Cards;