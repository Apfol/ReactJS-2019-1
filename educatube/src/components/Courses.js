import React,{Component} from 'react';
import Curso from "./Course";
import { MdComputer }  from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { TiKeyboard } from "react-icons/ti";
import { TiDevicePhone } from "react-icons/ti";



class Cursos extends Component
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
            <div class="row">
            <div class="row">
              <div className='col-xs-6 col-sm-3 col-lg-3'>
                <Curso icon={<MdComputer/>} title='Software' />
              </div>
              <div className='col-xs-6 col-sm-3 col-lg-3'>
                <Curso  icon={<TiPencil/>}title='Diseño' />
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <Curso  icon={<TiKeyboard/>}title='React JS' />
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <Curso  icon={<MdComputer/>}title='Node JS' />
              </div>
              </div>
              <div class="row">
              <div className='col-xs-12 col-sm-5 col-md-5 col-lg-3'>
                <Curso  icon={<MdComputer/>}title='Desarrollo web' />
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <Curso icon={<TiDevicePhone/>} title='Apps' />
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <Curso  icon={<MdComputer/>}title='Inteligencia Artificial' />
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <Curso icon={<MdComputer/>} title='Machine Learning' />
              </div>
            </div>
            </div>
          </div>
        );
      }
}
export default Cursos;