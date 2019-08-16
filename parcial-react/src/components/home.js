import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';

class Home extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    
                    <div className="my-text">
                        <h2 style={{alignContent:'center'}}>Mercado virtual de compras mayoristas</h2>
                        <hr></hr>
                        <p>Ahora, tu empresa también puede comprar online!</p>
                        <p>
                         Ropa | Comida | Papeleria | Otros 
                        </p>
                        
                    </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Home;