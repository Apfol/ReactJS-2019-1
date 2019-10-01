import React, {Component} from 'react';
import { slide as Bola } from 'react-burger-menu';
import burger from './burger.css';

 class BugerMenu extends Component {
    render(){
        return (
          // Pass on our props
          <Bola>
            <a className={burger.menu_item} href="/">
              Home
            </a>
      
            <a className={burger.menu_item} href="/burgers">
              Burgers
            </a>
      
            <a className={burger.menu_item} href="/pizzas">
              Pizzas
            </a>
      
            <a className={burger.menu_item} href="/desserts">
              Desserts
            </a>
          </Bola>
        );
      };
    }
  
    export default BugerMenu;